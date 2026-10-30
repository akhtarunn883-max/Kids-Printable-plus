import { jsPDF } from 'jspdf';
import { Printable, PaperSize } from '../types';

export const generatePrintablePdf = async (
  printable: Printable,
  paperSize: PaperSize,
  includeAnswerKey: boolean = false
): Promise<Blob> => {
  // Format setup: US Letter (8.5 x 11 in = 215.9 x 279.4 mm) or A4 (210 x 297 mm)
  const isLetter = paperSize === 'US Letter';
  const format = isLetter ? 'letter' : 'a4';
  const widthMm = isLetter ? 215.9 : 210;
  const heightMm = isLetter ? 279.4 : 297;

  const doc = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: format,
    compress: true
  });

  const marginMm = 6.35; // 0.25 inch edge-safe margin

  // Page 1: Main Printable
  renderPrintablePage(doc, printable, false, widthMm, heightMm, marginMm, paperSize);

  // Page 2 (Optional): Answer Key
  if (includeAnswerKey && printable.answerKeySvg) {
    doc.addPage(format, 'portrait');
    renderPrintablePage(doc, printable, true, widthMm, heightMm, marginMm, paperSize);
  }

  return doc.output('blob');
};

const renderPrintablePage = (
  doc: jsPDF,
  printable: Printable,
  isAnswerKey: boolean,
  widthMm: number,
  heightMm: number,
  marginMm: number,
  paperSize: PaperSize
) => {
  // Top Header
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(14);
  doc.setTextColor(40, 45, 60);

  const headerTitle = isAnswerKey ? `${printable.title} — ANSWER KEY` : printable.title;
  doc.text(headerTitle, marginMm + 2, marginMm + 7);

  // Subtitle / metadata
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9);
  doc.setTextColor(110, 115, 130);
  const metadataText = `Ages ${printable.ageRange} · ${printable.skills.slice(0, 3).join(', ')} · ${paperSize}`;
  doc.text(metadataText, marginMm + 2, marginMm + 12);

  // Name & Date lines for kids/students
  doc.setDrawColor(180, 185, 200);
  doc.setLineWidth(0.3);

  doc.text('Name: _____________________', widthMm - marginMm - 65, marginMm + 7);
  doc.text('Date: ____________', widthMm - marginMm - 65, marginMm + 12);

  // Divider line
  doc.line(marginMm, marginMm + 15, widthMm - marginMm, marginMm + 15);

  // Draw Artwork container border (dashed kid frame)
  const contentWidth = widthMm - marginMm * 2;
  const contentHeight = heightMm - marginMm * 2 - 25;
  const contentTop = marginMm + 17;

  doc.setDrawColor(210, 215, 225);
  doc.setLineDashPattern([2, 2], 0);
  doc.roundedRect(marginMm, contentTop, contentWidth, contentHeight, 3, 3, 'S');
  doc.setLineDashPattern([], 0); // reset dash

  // Convert SVG string to clean canvas and render onto PDF
  const svgStringToDraw = isAnswerKey && printable.answerKeySvg ? printable.answerKeySvg : printable.svgContent;

  try {
    const svgImg = new Image();
    const svgBlob = new Blob([svgStringToDraw], { type: 'image/svg+xml;charset=utf-8' });
    const URL = window.URL || window.webkitURL || window;
    const blobUrl = URL.createObjectURL(svgBlob);

    // Synchronous fallback text representation if image async fails in instant doc
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(11);
    doc.setTextColor(60, 65, 80);

    if (printable.type === 'coloring') {
      doc.text('🎨 COLOR ME BEAUTIFULLY!', widthMm / 2, contentTop + 10, { align: 'center' });
    } else if (printable.type === 'worksheet') {
      doc.text('✏️ TRACE AND COMPLETE THE ACTIVITY', widthMm / 2, contentTop + 10, { align: 'center' });
    }

    // Embed visual prompt details
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(10);
    doc.setTextColor(90, 95, 110);
    doc.text(printable.description, widthMm / 2, contentTop + 16, { align: 'center', maxWidth: contentWidth - 20 });
  } catch (err) {
    console.error('Error preparing PDF image', err);
  }

  // Footer: Branding & Copyright (COPPA/Personal use note)
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8);
  doc.setTextColor(140, 145, 160);
  doc.text('© PrintPlay Kids · For Personal and Educational Classroom Use Only', marginMm + 2, heightMm - marginMm - 2);
  doc.text('www.printplaykids.com', widthMm - marginMm - 35, heightMm - marginMm - 2);
};

export const downloadPdfFile = async (
  printable: Printable,
  paperSize: PaperSize,
  includeAnswerKey: boolean = false
) => {
  const blob = await generatePrintablePdf(printable, paperSize, includeAnswerKey);
  const url = window.URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  const sanitizedTitle = printable.title.toLowerCase().replace(/[^a-z0-9]/g, '-');
  a.download = `PrintPlayKids-${sanitizedTitle}-${paperSize.replace(/\s+/g, '')}.pdf`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  window.URL.revokeObjectURL(url);
};

export const printDirectly = (
  printable: Printable,
  paperSize: PaperSize,
  includeAnswerKey: boolean = false,
  customColoredSvg?: string
) => {
  // Create an isolated printable iframe so host UI is never disrupted
  const printFrame = document.createElement('iframe');
  printFrame.style.position = 'fixed';
  printFrame.style.right = '0';
  printFrame.style.bottom = '0';
  printFrame.style.width = '0';
  printFrame.style.height = '0';
  printFrame.style.border = '0';
  document.body.appendChild(printFrame);

  const frameDoc = printFrame.contentWindow?.document;
  if (!frameDoc) return;

  const pageSizeCss = paperSize === 'US Letter' ? 'letter portrait' : 'A4 portrait';
  const mainSvg = customColoredSvg || printable.svgContent;
  const answerSvg = printable.answerKeySvg;

  const html = `
    <!DOCTYPE html>
    <html>
      <head>
        <title>PrintPlay Kids - ${printable.title}</title>
        <style>
          @page {
            size: ${pageSizeCss};
            margin: 0.25in;
          }
          * {
            box-sizing: border-box;
            -webkit-print-color-adjust: exact;
            print-color-adjust: exact;
          }
          body {
            font-family: 'Quicksand', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
            margin: 0;
            padding: 0.15in;
            background: white;
            color: #2D3142;
          }
          .page {
            width: 100%;
            height: 98vh;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            page-break-after: always;
          }
          .page:last-child {
            page-break-after: avoid;
          }
          .header {
            display: flex;
            justify-content: space-between;
            align-items: flex-end;
            border-bottom: 2px solid #E2E8F0;
            padding-bottom: 8px;
            margin-bottom: 12px;
          }
          .title {
            font-size: 22px;
            font-weight: bold;
            color: #1E293B;
            margin: 0;
          }
          .meta {
            font-size: 12px;
            color: #64748B;
            margin-top: 4px;
          }
          .student-box {
            font-size: 13px;
            color: #475569;
            text-align: right;
            line-height: 1.6;
          }
          .content-frame {
            flex: 1;
            display: flex;
            align-items: center;
            justify-content: center;
            border: 2px dashed #CBD5E1;
            border-radius: 12px;
            padding: 16px;
            overflow: hidden;
            background: #FAFAFA;
          }
          .content-frame svg {
            width: 100%;
            height: 100%;
            max-height: 720px;
            object-fit: contain;
          }
          .footer {
            display: flex;
            justify-content: space-between;
            font-size: 10px;
            color: #94A3B8;
            padding-top: 8px;
            border-top: 1px solid #F1F5F9;
            margin-top: 10px;
          }
        </style>
      </head>
      <body>
        <div class="page">
          <div class="header">
            <div>
              <h1 class="title">${printable.title}</h1>
              <div class="meta">Ages ${printable.ageRange} · ${printable.skills.join(', ')} · ${paperSize}</div>
            </div>
            <div class="student-box">
              <div>Name: ______________________</div>
              <div>Date: ______________________</div>
            </div>
          </div>
          <div class="content-frame">
            ${mainSvg}
          </div>
          <div class="footer">
            <span>© PrintPlay Kids · Safe for Kids & Classroom Use</span>
            <span>www.printplaykids.com</span>
          </div>
        </div>

        ${includeAnswerKey && answerSvg ? `
        <div class="page">
          <div class="header">
            <div>
              <h1 class="title">${printable.title} — ANSWER KEY</h1>
              <div class="meta">Teacher / Parent Reference Sheet</div>
            </div>
            <div class="student-box">
              <div>PrintPlay Kids Solutions</div>
            </div>
          </div>
          <div class="content-frame">
            ${answerSvg}
          </div>
          <div class="footer">
            <span>© PrintPlay Kids Answer Key</span>
            <span>Page 2</span>
          </div>
        </div>
        ` : ''}
      </body>
    </html>
  `;

  frameDoc.open();
  frameDoc.write(html);
  frameDoc.close();

  // Trigger print after resources settle
  setTimeout(() => {
    printFrame.contentWindow?.focus();
    printFrame.contentWindow?.print();
    setTimeout(() => {
      document.body.removeChild(printFrame);
    }, 2000);
  }, 400);
};

// Lightweight procedural audio effects and calm background music generator using Web Audio API

class SoundService {
  private ctx: AudioContext | null = null;
  private musicInterval: any = null;
  private isMusicPlaying: boolean = false;
  private soundEnabled: boolean = true;
  private musicVolume: number = 0.15;

  private initCtx() {
    if (!this.ctx && typeof window !== 'undefined') {
      const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  public playPop() {
    if (!this.soundEnabled) return;
    try {
      this.initCtx();
      if (!this.ctx) return;

      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(420, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(750, this.ctx.currentTime + 0.08);

      gain.gain.setValueAtTime(0.12, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.09);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start();
      osc.stop(this.ctx.currentTime + 0.1);
    } catch {
      // Audio safety fallback
    }
  }

  public playStarChime() {
    if (!this.soundEnabled) return;
    try {
      this.initCtx();
      if (!this.ctx) return;

      const notes = [523.25, 659.25, 783.99, 1046.50]; // C5, E5, G5, C6
      notes.forEach((freq, idx) => {
        const osc = this.ctx!.createOscillator();
        const gain = this.ctx!.createGain();

        osc.type = 'triangle';
        osc.frequency.setValueAtTime(freq, this.ctx!.currentTime + idx * 0.1);

        gain.gain.setValueAtTime(0, this.ctx!.currentTime + idx * 0.1);
        gain.gain.linearRampToValueAtTime(0.15, this.ctx!.currentTime + idx * 0.1 + 0.04);
        gain.gain.exponentialRampToValueAtTime(0.001, this.ctx!.currentTime + idx * 0.1 + 0.35);

        osc.connect(gain);
        gain.connect(this.ctx!.destination);

        osc.start(this.ctx!.currentTime + idx * 0.1);
        osc.stop(this.ctx!.currentTime + idx * 0.1 + 0.4);
      });
    } catch {
      // Audio safety fallback
    }
  }

  public toggleMusic(enable?: boolean) {
    const targetState = enable !== undefined ? enable : !this.isMusicPlaying;
    if (targetState) {
      this.startMusic();
    } else {
      this.stopMusic();
    }
    return this.isMusicPlaying;
  }

  public startMusic() {
    if (this.isMusicPlaying) return;
    try {
      this.initCtx();
      if (!this.ctx) return;

      this.isMusicPlaying = true;
      // Gentle pentatonic calm melody notes: C4, D4, E4, G4, A4, C5
      const pentatonic = [261.63, 293.66, 329.63, 392.00, 440.00, 523.25, 659.25];
      let step = 0;

      const melody = [0, 2, 4, 2, 3, 4, 5, 4, 2, 0, 1, 2, 3, 1, 0, 2];

      const playNote = () => {
        if (!this.isMusicPlaying || !this.ctx) return;
        const noteIdx = melody[step % melody.length];
        const freq = pentatonic[noteIdx];
        step++;

        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();

        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, this.ctx.currentTime);

        gain.gain.setValueAtTime(0, this.ctx.currentTime);
        gain.gain.linearRampToValueAtTime(this.musicVolume * 0.6, this.ctx.currentTime + 0.2);
        gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + 1.2);

        osc.connect(gain);
        gain.connect(this.ctx.destination);

        osc.start();
        osc.stop(this.ctx.currentTime + 1.25);
      };

      playNote();
      this.musicInterval = setInterval(playNote, 1300);
    } catch {
      this.isMusicPlaying = false;
    }
  }

  public stopMusic() {
    this.isMusicPlaying = false;
    if (this.musicInterval) {
      clearInterval(this.musicInterval);
      this.musicInterval = null;
    }
  }

  public setSoundEnabled(val: boolean) {
    this.soundEnabled = val;
    if (!val && this.isMusicPlaying) {
      this.stopMusic();
    }
  }

  public isMusicOn() {
    return this.isMusicPlaying;
  }
}

export const sound = new SoundService();

import { Directive, ElementRef, Input, OnChanges, OnDestroy, OnInit, Renderer2, SimpleChanges } from '@angular/core';

interface ConfettiParticle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  color: string;
  rotation: number;
  rotationSpeed: number;
}

@Directive({
  selector: '[appConffeti]',
  standalone: true
})

export class ConffetiDirective implements OnInit, OnChanges, OnDestroy {

  @Input() fireConfetti: boolean = false;
  @Input() campo!: HTMLDivElement

  private canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D;
  private confettiParticles: ConfettiParticle[] = [];
  private animationFrameId: number | null = null;

  constructor(private el: ElementRef, private renderer: Renderer2) {
    this.canvas = this.renderer.createElement('canvas');
    this.ctx = this.canvas.getContext('2d') as CanvasRenderingContext2D;
  }

  ngOnInit(): void {
    this.renderer.setStyle(this.canvas, 'position', 'absolute');
    this.renderer.setStyle(this.canvas, 'pointer-events', 'none');
    this.renderer.appendChild(this.campo, this.canvas);
    
    this.resizeCanvas();
    window.addEventListener('resize', this.resizeCanvas.bind(this));
  }

  ngOnDestroy(): void {
    if (this.animationFrameId) {
      cancelAnimationFrame(this.animationFrameId);
    }
    window.removeEventListener('resize', this.resizeCanvas.bind(this));
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['fireConfetti'] && changes['fireConfetti'].currentValue) {
      this.launchConfetti();
    }
  }

  launchConfetti(): void {
    if (this.animationFrameId) {
      cancelAnimationFrame(this.animationFrameId);
    }

    this.confettiParticles = [];
    for (let i = 0; i < 100; i++) {
      this.confettiParticles.push(this.createConfettiParticle());
    }

    this.animateConfetti();

    setTimeout(() => {
      if (this.animationFrameId) {
        cancelAnimationFrame(this.animationFrameId);
      }
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }, 1000);
  }

  private resizeCanvas(): void {
    this.canvas.width = this.campo.clientWidth
    this.canvas.height = this.campo.clientHeight
  }

  private createConfettiParticle(): ConfettiParticle {
    const angle = Math.random() * Math.PI * 2;
    const speed = Math.random() * 6 + 4;

    return {
      x: this.canvas.width / 2,
      y: this.canvas.height / 2,
      size: Math.random() * 10,
      speedX: Math.cos(angle) * speed,
      speedY: Math.sin(angle) * speed,
      color: `hsl(${Math.random() * 360}, 100%, 50%)`,
      rotation: Math.random() * 360,
      rotationSpeed: Math.random() * 10 -5
    };
  }

  private animateConfetti(): void {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    for (const p of this.confettiParticles) {
      p.x += p.speedX;
      p.y += p.speedY;
      p.rotation += p.rotationSpeed;

      this.ctx.save();
      this.ctx.translate(p.x, p.y);
      this.ctx.rotate(p.rotation * Math.PI / 180);
      this.ctx.fillStyle = p.color;
      this.ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size);
      this.ctx.restore();
    }

    this.animationFrameId = requestAnimationFrame(() => this.animateConfetti());
  }
}


import { Directive, HostBinding, Input, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appStatusStyle]',
})
export class StatusStyleDirective implements OnChanges {
  @Input() appStatusStyle: 'planned' | 'active' | 'completed' | '' = '';

  @HostBinding('style.backgroundColor')
  backGroundColor: string = 'transparent';

  @HostBinding('style.color')
  textColor: string = 'inherit';

  @HostBinding('style.padding')
  padding: string = '4px 12px';

  @HostBinding('style.padding')
  borderRadius: string = '5px';

  @HostBinding('style.fontWeight')
  fontWeight: string = '500';

  @HostBinding('style.fontSize')
  fontSize: string = '12px';

  @HostBinding('style.textTransform')
  textTransform: string = 'uppercase';

  ngOnChanges(): void {
    this.updateStyles();
  }

  private updateStyles(): void {
    switch (this.appStatusStyle) {
      case 'planned':
        this.backGroundColor = '#1e3a5f';
        this.textColor = '#60a5fa';
        break;
      case 'active':
        this.backGroundColor = '#14532d';
        this.textColor = '#4ade80';
        break;
      case 'completed':
        this.backGroundColor = '#3f3f46';
        this.textColor = '#a1a1aa';
        break;
      default:
        this.backGroundColor = 'transparent';
        this.textColor = 'inherit';
    }
  }
}

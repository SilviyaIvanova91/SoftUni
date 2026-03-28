import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { NotificationService } from '../../services/notification';
import { Subscription } from 'rxjs';
import { Notification } from '../../interfaces/notification.interface';

@Component({
  selector: 'app-notification',
  imports: [],
  template: `@if (notification) {
    <div class="notification" [class]="notification.type">
      <span class="icon">{{ getIcon(notification.type) }}</span>
      <span class="message">{{ notification.message }}</span>
      <button class="close" (click)="dismiss()">x</button>
    </div>
  }`,
  styleUrl: './notification.css',
})
export class NotificationComponent implements OnInit, OnDestroy {
  private notificationService = inject(NotificationService);
  private subscription?: Subscription;
  private timeout?: ReturnType<typeof setTimeout>;

  notification: Notification | null = null;

  ngOnInit(): void {
    this.subscription = this.notificationService.notifications$.subscribe((notificationTaken) => {
      this.notification = notificationTaken;

      if (this.timeout) {
        clearTimeout(this.timeout);
      }

      this.timeout = setTimeout(() => {
        this.dismiss();
      }, notificationTaken.duration || 3000);
    });
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
    if (this.timeout) {
      clearTimeout(this.timeout);
    }
  }

  dismiss(): void {
    this.notification = null;
  }

  getIcon(type: string): string {
    const icons: Record<string, string> = {
      success: '✅',
      error: '❌',
      info: 'ℹ️',
      warning: '⚠️',
    };
    return icons[type] || '🔈';
  }
}

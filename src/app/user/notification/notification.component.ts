import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { NotificationServiceService, Notification } from '../../service/notification-service.service';

@Component({
  selector: 'app-notification',
  standalone: false,
  templateUrl: './notification.component.html',
  styleUrl: './notification.component.scss'
})
export class NotificationComponent implements OnInit{
  notifications: Notification[] = [];
  loading = true;
  error: string | null = null;
  showNotifications = true;

  constructor(private notificationService: NotificationServiceService) {}

  ngOnInit(): void {
    this.fetchNotifications();
  }

  fetchNotifications() {
    this.notificationService.getNotifications().subscribe({
      next: (data) => {
        this.notifications = data;
        this.loading = false;
      },
      error: () => {
        this.error = 'Failed to load notifications';
        this.loading = false;
      }
    });
  }

  trackByNotificationId(index: number, notif: Notification): number {
    return notif.id;
  }

  getNotificationStatus(notif: Notification): 'new' | 'completed' | 'pending' | 'default' {
    // TODO: Adjust logic based on your model
    return 'new';  // all notifications as new by default
  }


  getNotificationStatusText(notif: Notification): string {
    switch (this.getNotificationStatus(notif)) {
      case 'new': return 'New';
      case 'completed': return 'Completed';
      case 'pending': return 'Pending';
      default: return 'General';
    }
  }

  closeNotifications() {
    this.showNotifications = false;
  }

}

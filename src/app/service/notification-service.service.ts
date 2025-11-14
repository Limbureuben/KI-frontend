import { HttpClient } from '@angular/common/http';
import { Inject, Injectable, NgZone, PLATFORM_ID } from '@angular/core';
import { Observable } from 'rxjs';

export interface Notification {
  id: number;
  report_id: string;
  message: string;
  replied_by: string;   // <-- add this
  created_at: string;   // <-- add this
}


@Injectable({
  providedIn: 'root'
})
export class NotificationServiceService {
  private apiUrl = 'http://localhost:8000/api/v1/notifications/';

  constructor(private http: HttpClient) {}

  getNotifications(): Observable<Notification[]> {
    return this.http.get<Notification[]>(this.apiUrl);
  }
}

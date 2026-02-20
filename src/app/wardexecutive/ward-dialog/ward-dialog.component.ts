import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { WardmapDirectionComponent } from '../wardmap-direction/wardmap-direction.component';

@Component({
  selector: 'app-ward-dialog',
  standalone: false,
  templateUrl: './ward-dialog.component.html',
  styleUrl: './ward-dialog.component.scss'
})
export class WardDialogComponent {
isMediaModalOpen = false;
  selectedMedia: string = '';
  isVideo: boolean = false;

  constructor(
    public dialogRef: MatDialogRef<WardDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialog: MatDialog,
  ) {
    console.log('Dialog data:', this.data);
  }



  getFileUrl(): string {
      if (!this.data?.file) return '';

      // If full URL already provided from backend
      if (this.data.file.startsWith('http://') || this.data.file.startsWith('https://')) {
        return this.data.file;
      }

      // If backend already gave us `/media/...` path
      if (this.data.file.startsWith('/media/')) {
        return `http://95.111.247.129:8099${this.data.file}`;
      }

      // Otherwise assume it's a relative path without media/
      return `http://95.111.247.129:8099/media/${this.data.file}`;
    }


    isVideoFile(fileUrl: string): boolean {
      if (!fileUrl) return false;
      const ext = fileUrl.split('.').pop()?.toLowerCase();
      return ['mp4', 'webm', 'ogg', 'mov', 'avi'].includes(ext || '');
    }

    openMediaModal(mediaUrl: string): void {
      this.selectedMedia = mediaUrl;
      this.isVideo = this.isVideoFile(mediaUrl);
      this.isMediaModalOpen = true;
    }

    closeMediaModal(): void {
      this.isMediaModalOpen = false;
    }

    openMapDirections(lat: number, lng: number): void {
      const mapUrl = `https://www.google.com/maps?q=${lat},${lng}&output=embed`;
      this.dialog.open(WardmapDirectionComponent, {
        width: '600px',
        data: { mapUrl }
      });
    }

      closeForm(): void {
        this.dialogRef.close();
      }

}

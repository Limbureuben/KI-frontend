import { Component, ElementRef, Inject, Input, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-wardmap-direction',
  standalone: false,
  templateUrl: './wardmap-direction.component.html',
  styleUrl: './wardmap-direction.component.scss'
})
export class WardmapDirectionComponent {
@Input() destinationLat!: number;
    @Input() destinationLng!: number;
    @ViewChild('map', { static: true }) mapElement!: ElementRef;

    constructor(
      public dialogRef: MatDialogRef<WardmapDirectionComponent>,
      @Inject(MAT_DIALOG_DATA) public data: { mapUrl: string },
      private toastr: ToastrService
    ) {}

  close(): void {
    this.dialogRef.close();
  }

}

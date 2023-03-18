import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NzModalRef } from 'ng-zorro-antd/modal';
import { ILocality } from 'src/app/interfaces/locality.model';
import { IPointOfDrop } from 'src/app/interfaces/point-of-drop.model';
import { AdminConsumerService } from 'src/app/services/api-consumer/api-admin-consumer.service';
import { ReloadService } from 'src/app/services/observable/reload.service';

@Component({
  selector: 'app-register-point-of-drop',
  templateUrl: './register-point-of-drop.component.html',
  styleUrls: ['./register-point-of-drop.component.scss']
})
export class RegisterPointOfDropComponent implements OnInit {
  form!: FormGroup;
  isLoading = false;
  localities!: ILocality[];
  locality!: ILocality;
  pointOfDrop!: IPointOfDrop;

  constructor(
    private adminConsumer: AdminConsumerService,
    private fb: FormBuilder,
    private modalRef: NzModalRef,
    private reload: ReloadService
  ) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      name: [``, Validators.required],
      locality: [``, Validators.required]
    });

    this.getLocalities();
  }

  close() {
    this.modalRef.destroy();
  }

  createPointOfDrop() {
    this.loadTwo();
    if (this.form.valid) {
      console.log(this.form.value);
      this.adminConsumer.registerPointOfDrop(this.form.value).subscribe({
        next: (response) => {
          console.log(response);
          setTimeout(()=>{this.close()}, 1000);
          this.reload.emit(true)
        },
        error: (err) => {
          console.log(err);
        }
      })
      console.log(this.form.value);
    }
  }

  localitySelected(locality: ILocality) {
    this.locality = locality;
  }

  loadTwo(): void {
    this.isLoading = true;
    setTimeout(() => {
      this.isLoading = false;
    }, 3000);
  }

  getLocalities() {
    this.adminConsumer.getAllLocality().subscribe({
      next: (response : any)=> {
        console.log(response);
        if(response.status == 200) {
          this.localities = response.data;
        }
      },
      error: (err)=> {
        console.log(err);
      }
    })
  }
}

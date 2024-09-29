import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { TitleComponent } from "../../../shared/title/title.component";
import { InputComponent } from "../../../shared/input/input.component";
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { ButtonComponent } from "../../../shared/button/button.component";
import { time } from 'console';
import { Subject, take, takeUntil, timer } from 'rxjs';
import { ApiService } from '../../../core/api.service';
import { HttpClientModule } from '@angular/common/http';
import { User } from '../../../intefaces/user.interface';

@Component({
  selector: 'app-create-user',
  standalone: true,
  imports: [TitleComponent, InputComponent, ReactiveFormsModule, MatIconModule, ButtonComponent],
  templateUrl: './create-user.component.html',
  styleUrl: './create-user.component.scss',
})
export class CreateUserComponent implements OnInit, OnDestroy {

  @ViewChild('elemento') someInput!: ElementRef;
  displayAnimation!: boolean;
  data: any;
  user!: any;
  userForm: FormGroup<any>;


  private _unsuscribe: Subject<boolean>;

  constructor(
    private _formBuilder: FormBuilder,
    private _api: ApiService,
  ) {
    this._unsuscribe = new Subject<boolean>
    this.user = {};


    this.userForm = this._formBuilder.group({
      name: ['',[Validators.required]],
      // espresiones regulares
      phone: ['',[Validators.required]],
      addresse: ['',[Validators.required]],
      ci: ['',[Validators.required]],
      password: ['',[Validators.required]],
      lastName: ['',[Validators.required]],
      userName: ['',[Validators.required]],
      role: ['',[Validators.required]],
      birthdate: ['',[Validators.required]],
    })
  }

  ngOnInit(): void {
    this._unsuscribe.next(true);
    this._api.getData().pipe(takeUntil(this._unsuscribe)).subscribe((xx) => {
      console.log(xx)
    }
    );
  }

  enviar($event: MouseEvent) {
    this._formBuilder.group
    this._formBuilder.array
    this._formBuilder.control
    this._formBuilder.record
  }

  public setUserInformation(value: string, name: string) {
    this.user[name] = value;
  }


  showImage(event: any, img: HTMLImageElement): void {
    var file = event.target?.files[0];
    this.user['photo'] = file;
    var reader = new FileReader();
    reader.onload = function (event) {
      img.src = event?.target?.result as string;
    }
    reader.readAsDataURL(file);
  }

  console() {
    console.log('se hace')
    }

  ngOnDestroy(): void {
    this._unsuscribe.next(false)
  }

}

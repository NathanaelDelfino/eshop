import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LoadingController, NavController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { DataService } from 'src/app/data.services';
import { UserModel } from 'src/app/models/user.model';
import { SecurityUtil } from 'src/app/utils/security.util';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  public hide = true;
  public form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private loadinCtrl: LoadingController,
    private toastCtrl: ToastController,
    private navCtrl: NavController,
    private service: DataService
  ) {
    this.form = this.fb.group({
      username: ['', Validators.compose([
        Validators.required,
      ])],
      password: ['', Validators.compose([
        Validators.minLength(6),
        Validators.maxLength(20),
        Validators.required
      ])]
    });
  }

  async submit() {
    if (this.form.invalid)
      return;

    const loading = await this.loadinCtrl.create({ message: 'Autenticando....' });
    loading.present();

    this
      .service
      .authenticate(this.form.value)
      .subscribe((res: UserModel) => {
        SecurityUtil.set(res);
        loading.dismiss();
        this.navCtrl.navigateRoot('/home');
      }, () => {
        this.showError('Usuário ou senha inválidos');
        loading.dismiss();
      })
  }

  ngOnInit() {
  }

  toggleHide() {
    this.hide = !this.hide;
  }

  async showError(message) {
    const toast = this.toastCtrl.create({
      header: 'Erro',
      message: message,
      duration: 3000,
      position: 'top',
      buttons: [
        {
          text: 'Fechar',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    (await toast).present();
    console.log('Entrou no erro')
  }


  async resetPassword() {
    if (this.form.controls['username'].invalid) {
      this.showError('Usuário inválido');
      return;
    }

    const loading = await this.loadinCtrl.create({ message: 'Restaurando sua senha...' });
    loading.present();
  }
}

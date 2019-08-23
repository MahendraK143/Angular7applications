import { Component } from '@angular/core';
import { User } from './user';
import { EnrollmentService } from './enrollment.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  errorMsg = '';
  title = 'CustomerApplication Mahendra';
  topics = ['Angular', 'React', 'Vue'];
  userModel = new User('123','Mahendra', 'kolamahendra9@gmail.com', 9494478874, 'default', 'Morning',true);
  topicHasError = true;
  constructor(private _enrollmentService:EnrollmentService){}
  validateTopic(value){
    //alert(value);
    if ( value == 'default' ) {
      this.topicHasError = true;
    } else {
      this.topicHasError = false;
    }
  }
  onSubmit(){
    //alert(this.userModel.topic);
    console.log(this.userModel);
    this._enrollmentService.enroll(this.userModel)
    .subscribe(
      data => console.log("Success", data),
      //error => console.error("Failure", error)
      error => this.errorMsg = error.statusText
    )
  }
}

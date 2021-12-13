import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl,Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Component({
  selector: 'app-zipcode',
  templateUrl: './zipcode.component.html',
  styleUrls: ['./zipcode.component.css']
})
export class ZipcodeComponent implements OnInit {
form:any
zip :any
showMsg :any;
  constructor(public fb :FormBuilder, private http:HttpClient) { }

  ngOnInit(): void {
    this.formBuild()

    }
    formBuild(){
      this.form =this.fb.group({zipcode:['',[Validators.pattern('^[1-9][0-9]{5}$')]]})

    }
    get zipcode(){
      return this.form.get('zipcode');

    }

    submit(e:any){
      let temp = this.form.value
      let obj:any = {}
      obj.zipcode = temp.zipcode
      let url = `https://api.zippopotam.us/IN/${obj.zipcode}`
      console.log(url)
      this.http.get(url).subscribe((res)=>{
        this.zip = res
        console.log(this.zip)

      })
      if(this.zip!=null){
        this.showMsg = true
      }
      if(this.zip==null){
        this.showMsg = false
      }
    }





}

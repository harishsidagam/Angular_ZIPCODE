import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
base_url = "https://api.zippopotam.us/IN/"
  constructor() { }
}

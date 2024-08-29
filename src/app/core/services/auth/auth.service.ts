import { User } from './../../models/User';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { APIEndPoint, LocalStorage } from '../../constants/constant';
import { map, Observable } from 'rxjs';
import { ApiResponse, LoginPayload, RegisterPayload } from '../../models/User';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  isLoggedIn = signal<boolean>(false);

   _http = inject(HttpClient);

  constructor() { 
    // const MyToken = localStorage.getItem(LocalStorage.accessToken);
    // if(MyToken){
    //   this.isLoggedIn.update(() => true);
    // }
  }

  RegisterUser(payload: RegisterPayload){
    return this._http.post<ApiResponse<User>>(`${APIEndPoint.AUTH.Register}`, payload, httpOptions)
  }

  loginUser(payload: LoginPayload){
    return this._http
    .post<ApiResponse<User>>(`${APIEndPoint.AUTH.Login}`,payload, httpOptions)
     .pipe(
      map((response)=>{
        if(response.statusCode){
          sessionStorage.setItem(LocalStorage.accessToken, response.data.accessToken);
          //sessionStorage.setItem(LocalStorage.accessToken, response.data.accessToken);
          this.isLoggedIn.update(() => true);
          sessionStorage.setItem("Admin", response.data.user.designation);
        }

        return response.data;
        
      })
    );
  }

  getUserToken(){
    return localStorage.getItem(LocalStorage.accessToken);
  }

  logoutUser(){
     return this._http.post(`${APIEndPoint.AUTH.Logout}`, httpOptions)
  }

  GetCurrentUser(){
    return this._http.get(`${APIEndPoint.AUTH.GetCurrentUser}`, httpOptions);
  }

  updateAccount(): Observable<any> {
    return this._http.patch(`${APIEndPoint.AUTH.UpdateAccount}`, httpOptions)
  }

  changePassword(): Observable<any> {
    return this._http.post(`${APIEndPoint.AUTH.ChangePassword}`, httpOptions)
  }

  resetPassword(): Observable<any> {
    return this._http.post(`${APIEndPoint.AUTH.ResetPassword}`, httpOptions)
  }

  refreshToken(): Observable<any> {
    return this._http.post(`${APIEndPoint.AUTH.RefreshToken}`, httpOptions)
  }

}

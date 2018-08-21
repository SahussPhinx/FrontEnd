import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private apiURL = 'https://jap-api-uat.herokuapp.com/api/'

  constructor(private http:HttpClient) { }

  getSemster(){
    return this.http.get(this.apiURL + 'getSemester/');
  }
  getCourse(semester){
    return this.http.post(this.apiURL + 'getCourseInSemester/',semester);
  }
  getStudent(section){
    return this.http.post(this.apiURL + 'getStudentInSection/',section);
  }
}

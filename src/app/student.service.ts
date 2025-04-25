import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from './student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  apiUrl = "http://localhost:3000/students";

  constructor(private http: HttpClient) { }

  //recupera todos os estudantes
  getAll() : Observable<Student[]>{
    return this.http.get<Student[]>(this.apiUrl);
  }

  //salva todos os estudantes
  save(student: Student): Observable<Student>{
    return this.http.post<Student>(this.apiUrl, student);    
  }
  
  //remove um estudante
  delete(student:Student):Observable<void>{
    return this.http.delete<void>(`${this.apiUrl}/${student.id}`);
  }

  //atualizar os dados do estudante
  update(student:Student):Observable<Student>{
    return this.http.put<Student>(`${this.apiUrl}/${student.id}` , student);
  }


}

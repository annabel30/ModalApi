import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({ providedIn: 'root' })
export class ModalService {

    constructor(
        private httpClient: HttpClient
    ) {
    }

    getTags(): Observable<string[]> {
        return this.httpClient.get<string[]>('https://cataas.com/api/tags');
    }

}
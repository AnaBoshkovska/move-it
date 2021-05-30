import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { AuthenticationService } from '../../services/authentication.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    private returnUrl: string;
    public loginForm: FormGroup;
    public submitted: boolean = false;
    public error: string;
    

    constructor(private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private authenticationService: AuthenticationService) {
        if (this.authenticationService.currentUserValue) {
            this.router.navigate(['/']);
        }
    }

    ngOnInit(): void {
       
        this.loginForm = this.formBuilder.group({
            email: ['', Validators.required],
            password: ['', Validators.required]
        });

        this.returnUrl = this.route.snapshot.queryParams['returnUrl'];
    }

    getLoginForm() {
        return this.loginForm.controls;
    }

    onSubmit() {
        this.submitted = true;
        if (this.loginForm.invalid) {
            return;
        }

        this.authenticationService.login(this.loginForm.controls.email.value, this.loginForm.controls.password.value)
            .subscribe(data => {
                if (this.returnUrl == undefined) {
                    this.router.navigate(['/home']);
                }
                else {
                    this.router.navigate([this.returnUrl]);
                }
            },
                error => {
                    this.error = "Incorrect username or password."
                });
    }
}

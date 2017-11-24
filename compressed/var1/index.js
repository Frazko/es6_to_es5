"use strict";window.exp23a.signUp.abcss="<style>\n    @media screen and (max-width: 767px) {\n        #signUpWhite, #signInWhite, #formExp23_forgotPassword {\n            display: none !important;\n        }\n    }\n    \n    @media screen and (min-width: 768px) {\n        #signUpWhite .popup .wrapper, #signInWhite .popup .wrapper, #forgotPasswordWhite .popup .wrapper {\n                top: 0;\n                overflow-y: auto;\n                overflow-x: hidden;\n                height: 100%;\n                position: fixed !important;\n                left: calc(50%) !important;\n                margin: 0 0 0 -350px !important;\n                max-width: 700px !important;\n        }\n        #signUpWhite.ab-exp-23_signUp .popup-content, #signInWhite .popup-content, #forgotPasswordWhite .popup-content {\n            width: 660px;\n            border-radius: 3px;\n        }\n        #signInWhite .popup .wrapper::-webkit-scrollbar,#signUpWhite .popup .wrapper::-webkit-scrollbar,#forgotPasswordWhite .popup .wrapper::-webkit-scrollbar { \n            display: none; \n        }\n        }\n        #signInWhite .popup .wrapper::-moz-scrollbar,#signUpWhite .popup .wrapper::-webkit-scrollbar,#forgotPasswordWhite .popup .wrapper::-webkit-scrollbar { \n            display: none; \n        }\n        #signInWhite .popup-content, #signUpWhite .popup-content, #forgotPasswordWhite .popup-content {\n            margin: 40px auto auto;\n        }\n        #signUpWhite .form-content .form-group+.form-group, #signInWhite .form-content .form-group+.form-group, #formExp23_forgotPassword .form-content .form-group+.form-group{\n            margin-top: 30px;\n        }\n        #signUpWhite section.up, #signInWhite section.up, #formExp23_forgotPassword section.up{\n            margin-top: 30px;\n        }\n        .up.one-up.one-up-medium {\n            margin-top: 6px !important;\n        }\n        #signUpWhite .up.one-up.one-up-medium {\n            margin-left: 75px;\n        }\n        .captcha-wrapper{\n            margin-top:12px;\n        }\n        .submit-footer .form-group>p{\n            margin: 0;\n            font-size:14px;\n        }\n\n        /* -- Form close btn  -- */\n        .popup-content .closeText {\n            position: relative;\n            text-align: right;\n            font-size: 14px;\n            width: 620px;\n            top: 9px;\n            color: #00ACED;\n            display: inline-block;\n        }\n        .popup-window .popup .popup-content .close-btn {\n            margin: 0;\n        }\n        .popup-window .popup .popup-content .mck-radial-x-icon:before {\n            color: #fff !important;\n            ;\n        }\n        .popup-window .popup .popup-content .mck-radial-x-icon:after {\n            background-color: #2bafe9 !important;\n        }\n\n        #signUpWhite .one-up-medium {\n            width: 90%;\n        }\n        #signUpWhite header {\n            text-align: center;\n        }\n        #signUpWhite input, #signInWhite input {\n            border-radius: 3px;\n            width: 248px ;\n            height: 34px;\n            padding: 5px;\n        }\n\n        #forgotPasswordWhite input {\n            border-radius: 3px;\n            height: 34px;\n            width: 302px !important;\n        }\n\n        #signUpWhite .up.two-up{\n            margin: 0;\n            width: 100%;\n            text-align: center;\n        }\n        #signUpWhite .form-content .form-group label {\n            margin-bottom: 5px;\n        }\n        \n        #signUpWhite #signUpWhite_btnSubmit,  .noAccount {\n            margin-top: 20px;\n        }\n        #signUpWhite .g-recaptcha{\n            position: relative;\n            left: 100px;\n        }\n\n        .form-content .form-group.has-error label {\n            \n        }\n        .popup-window .popup .popup-content{\n            padding-bottom: 45px;\n        }\n\n        .popup-window .popup .popup-content .up .module-header {\n            width:100%;\n        }\n\n        .popup-window .popup .popup-content .up .module-header h3 {\n            font-size: 42px !important;\n            font-family: Chronicle Deck !important;\n            font-weight: 600;\n            line-height: 1em;\n            color: #00306e;\n            margin-bottom: 6px !important;\n        }\n\n        .popup-window .popup .popup-content .up .module-header .description.module-description {\n            font-size: 18px;\n            font-family: Chronicle Deck;\n            color: #000;\n            font-weight: 400;\n            line-height: 1.4em;\n            margin-top: 20px;\n        }\n\n        #signUpWhite.ab-exp-23_signUp.popup-window .form-content_exp23a_signUp {\n            width: 100% !important;\n        }\n        #signUpWhite.ab-exp-23_signUp.popup-window .popup-content .headline {\n            color: #03316c;\n            font-weight: 600;\n            margin-bottom: 30px;\n        }\n        #signUpWhite.ab-exp-23_signUp .form-row:nth-child(3) {\n            margin: 30px 0;\n        }\n        #signUpWhite.ab-exp-23_signUp .ab-message-hidden {\n            display: none;\n        }\n        #signUpWhite.ab-exp-23_signUp #errorMessage {\n            margin-bottom: 10px;\n            padding: 0;\n        }\n        /* -- Form fields  -- */\n        #signUpWhite.ab-exp-23_signUp .form-row {\n            display: table;\n        }\n        #signUpWhite.ab-exp-23_signUp .form-row .form-group:nth-child(1) {\n            padding-right: 10px;\n            display: table-cell;\n            width: 50%;\n        }\n        #signUpWhite.ab-exp-23_signUp .form-row .form-group:nth-child(2) {\n            padding-left: 10px;\n            display: table-cell;\n            width: 50%;\n        }\n        /* -- Form footer -- */\n        #signUpWhite.ab-exp-23_signUp .submit-footer {\n            display: table;\n            margin-top: 35px;\n        }\n        #signUpWhite.ab-exp-23_signUp .submit-footer form-group {\n            display: table-cell;\n        }\n\n        .form-content .form-group.has-error .help-block{\n            margin: 0 !important;\n            font-size: 12px;\n            height: 0;\n        }\n        .help-block-captcha {\n            font-size: 12px !important;\n            height:0;\n            display: block;\n            font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif;\n            color: #ed1c24;\n            margin: 0;\n        }\n\n        #fromSignUpToSignIn, #fromSignInToSignUp, #fromForgotToSignUp, #fromSignInToForgot, #fromForgotToSignIn{\n            font-size: 12px;\n            font-family: Whitney SSm;\n        }\n        #input#signUpWhite_btnSubmit, #signInWhite_btnSubmit, #forgotPasswordWhite_btnSubmit{\n            font-size: 12px;\n        }\n    }\n</style>",window.exp23a.signUp.popupForm=$('<form method="post" id="formExp23_SignUp" novalidate="novalidate" action="">\n    <div class="popup-window ab-exp-23_signUp " id="signUpWhite">\n        <div class="interactive-container _visible">\n            <div class="background"></div>\n            <div class="outer popup">\n                <div class="wrapper">\n                    <div class="popup-content" style="margin-top: 40px;">\n                        \x3c!-- Close btn --\x3e\n                        <span class="close-btn-holder"> <span class="closeText"><a href="javascript:void(0);">  No, Thank you </a></span><span class="close-btn mck-radial-x-icon" role="link"></span></span>\n                        <div class="up one-up one-up-medium">\n                            <header class="text-xl module-header">\n                                <h3 class="title headline">Sign up to keep reading</h3>\n                            </header>\n                            <header id="requiredMessageDescription" class="text-m module-header success" style="display: block;">\n                                <div class="description module-description">Creating your account gives you access to our latest articles and reports. It\'s fast and free!</div>\n                            </header>\n                        </div>\n                        <div class="up one-up one-up-medium" data-module="PopupForm">\n                            <div class="form-content">\n                                \x3c!-- Error / success msg --\x3e\n                                <div id="errorMessage" class="alert error no-pading-bottom no-margin-bottom" style="display: none;">\n                                    \n                                    <p id="main_0_universal_0_errormsg">Sorry something went wrong. Please try again</p>\n                                </div>\n                                <div id="successMessage" class="success-message" style="display: none;">\n                                </div>\n                                <div id="formContent_exp23a_signUp" style="display: block;">\n                                    <div class="form-group ab-message-hidden">\n                                        <label for="contactProfileMessageExpTwenty">PERSONAL MESSAGE</label>\n                                        <textarea  class="required" data-msg-required="Please provide your message." rows="8" cols="20" maxlength="8192" name="contactProfileMessageExpTwenty" id="contactProfileMessageExpTwenty" autofocus=""></textarea>\n                                    </div>\n                                    <div class="form-row">\n                                        <div class="form-group"> \n                                          <label for="name_exp23a_signUp">NAME</label>\n                                            <input  class="required textField" name="name_exp23a_signUp" id="name_exp23a_signUp" maxlength="50" type="text"\n                                                data-msg-required="Please provide your name." aria-required="true">\n                                        </div>\n                                        <div class="form-group"> \n                                          <label for="email_exp23a_signUp">EMAIL</label>\n                                            <input  name="email_exp23a_signUp" id="email_exp23a_signUp" maxlength="128" class="required textField " type="email"\n                                                data-msg-email="Please provide a valid email address." data-msg-required="Please provide your company email address."\n                                                aria-required="true">\n                                        </div>\n                                    </div>\n                                    <div class="form-row">\n                                        <div class="form-group"> \n                                          <label for="company_exp23a_signUp">COMPANY</label>\n                                            <input  class="required textField" name="company_exp23a_signUp" data-msg-required="Please provide an organization name."\n                                                id="company_exp23a_signUp" maxlength="50" type="text" data-rule-spam="true"\n                                                data-msg-spam="Please provide a valid company name." data-pattern="[<>%?^()]"\n                                                aria-required="true">\n                                        </div>\n\n                                        <div class="form-group"> \n                                          <label for="role_exp23a_signUp">ROLE</label>\n                                            <input  class="required textField" name="role_exp23a_signUp" id="role_exp23a_signUp" maxlength="50" data-msg-required="Please provide a role."\n                                                type="text" data-rule-spam="true" data-msg-spam="Please provide a valid title."\n                                                aria-required="true">\n                                        </div>\n                                    </div>\n\n                                    <section class="up two-up">\n                                        <div class="captcha-wrapper">\n                                            <div id="signUpCaptcha" class="form-group" data-module="Recaptcha">\n\n                                                \n\n\n                                              <div id="recaptchaElement"  data-callback="exp23captchaCallback" class="g-recaptcha" data-sitekey="6LdC5twSAAAAAF0dePIbY_ckeF05mKdYYJXn7uTg"></div>\n                  \n\n\n\n                                            </div>\n                                            <span class="error"></span>\n                                        </div>\n\n                                    <div class="submit-footer">\n                                        <div class="form-group">\n                                            <p>From time to time we may send you email, but you can opt out at any time.</p>\n                                            <input  name="signUpWhite_btnSubmit"  id="signUpWhite_btnSubmit" type="button" value="KEEP READING" class="btn-submit">\n                                        </div>\n\n                                        <div class="noAccount">\n                                            <span><a href="javascript:void(0);" id="fromSignUpToSignIn" rel="nofollow">Have an account?</a></span>\n                                        </div>\n                                    </div>\n\n                                    </section>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</form>'),window.exp23a.signIn.abcss="<style>\n    @media screen and (max-width: 767px) {\n        .popup-window.ab-exp-23_signIn {\n            display: none !important;\n        }\n    }\n    \n    @media screen and (min-width: 768px) {\n        #signInWhite header {\n            text-align: center;\n        }\n        #signInWhite #signInWhiteContent {\n            width: 100%;\n            text-align: center;\n        }\n        .form-content .form-group .controls-group {\n            text-align: left;\n            display: inline-table;\n        }\n        #signInWhite .form-content .form-group label {\n            display: block !important;\n        }\n        \n\n        .ab-exp-23_signIn.popup-window .form-content {\n            width: 100% !important;\n        }\n        .ab-exp-23_signIn.popup-window .popup-content .headline {\n            color: #03316c;\n            font-weight: 600;\n            margin-bottom: 30px;\n        }\n        .ab-exp-23_signIn .ab-message-hidden {\n            display: none;\n        }\n        .ab-exp-23_signIn #errorMessage {\n            margin-bottom: 10px;\n            padding: 0;\n        }\n\n        #signInWhite .form-content .form-group label {\n            margin-bottom: 5px;\n        }\n\n    }\n</style>",window.exp23a.signIn.popupForm=$('<form method="post" id="formExp23_SignIn" novalidate="novalidate" action="" >\n    <div class="popup-window ab-exp-23_signIn " id="signInWhite">\n        <div class="interactive-container _visible">\n            <div class="background"></div>\n            <div class="outer popup">\n                <div class="wrapper">\n                    <div class="popup-content">\n                        \x3c!-- Close btn --\x3e\n                       <span class="close-btn-holder"> <span class="closeText"><a href="javascript:void(0);">  No, Thank you </a></span><span class="close-btn mck-radial-x-icon" role="link"></span></span>\n                        \x3c!-- Header --\x3e\n                        <div class="up one-up one-up-medium">\n                            <header class="text-xl module-header">\n                                <h3 class="title headline">Sign in to keep reading</h3>\n                            </header>\n                            <header id="requiredMessageDescription" class="text-m module-header success" style="display: block;">\n                                <div class="description module-description">Welcome back. Signing in gives you access to our latest articles and reports.</div>\n                            </header>\n                        </div>\n                        <div class="up one-up one-up-medium" data-module="PopupForm">\n                            <div id="signInWhiteContent" class="form-content">\n                                \x3c!-- Error / success msg --\x3e\n                                <div id="errorMessage" class="alert error no-pading-bottom no-margin-bottom" style="display: none;">\n                                   \n                                    <p id="main_0_universal_0_errormsg">Sorry something went wrong. Please try again</p>\n                                </div >\n                                <div id="successMessage" class="success-message" style="display: none;">\n                                </div >\n                                \x3c!-- Popup Content--\x3e\n                                <div id="formContent_exp23a_signIn" style="display: block;">\n                                    <div id="emailDiv" class="form-group">\n                                        <div class="controls-group">\n                                            <label for="email_exp23a_signIn">Email</label>\n                                            <input class="required textField" name="email_exp23a_signIn" type="email" maxlength="128" id="email_exp23a_signIn" tabindex="1" data-rule-required="true" data-rule-email="true" data-msg-email="Please enter a valid email address." data-msg-required="Please enter your email address." aria-required="true">\n                                            <span id="emailValidator" style="display: none;"></span>\n                                        </div>\n                                    </div>\n                                    <div id="changePasswordDiv" class="form-group">\n                                        <div class="controls-group">\n                                            <label id="lblPassword" for="password_exp23a_signIn"> Password</label>\n                                            <input class="required textField" name="password_exp23a_signIn" type="password" maxlength="15" id="password_exp23a_signIn" tabindex="2" data-rule-required="true" data-msg-required="Please enter your password." autocomplete="off" aria-required="true">\n                                            <span id="PasswordValidator" style="display: none;"></span>\n                                        </div>\n                                    </div>\n                                    <section class="up two-up">\n                                        <div class="submit_btn">\n                                            <input tabindex="3" id="signInWhite_btnSubmit" type="button" value="KEEP READING" name="signInWhite_btnSubmit" class="btn-submit">\n                                        </div>\n                                        <div class="noAccount">\n                                            <span><a href="javascript:void(0);" id="fromSignInToForgot" rel="nofollow">Forgot password?</a> | \n                                            <a href="javascript:void(0);" id="fromSignInToSignUp" rel="nofollow">Don\'t have an account?</a></span>\n                                        </div>\n                                    </section>\n                                    <input name="__RequestVerificationToken" type="hidden" value="PJhPQ0vqeq0OLXAbdjIQV5qp778e8Nhrx98r2dH1-OnN2JtCfxXz5QQJ1Bx3i1ndyyIRhp9R6I9TGGJzbhPs1xBFoeY1">\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    </div>\n    </div>\n    </div>\n</form>'),window.exp23a.forgotPassword.abcss="<style>\n    @media screen and (max-width: 767px) {\n        .popup-window.ab-exp-23_forgotPassword {\n            display: none !important;\n        }\n    }\n    \n    @media screen and (min-width: 768px) {\n\n\n        \n        #forgotPasswordWhite header {\n            text-align: center;\n        }\n        #forgotPasswordWhite #forgotPasswordWhiteContent {\n            width: 100%;\n            text-align: center;\n        }\n        #forgotPasswordWhite .form-content .form-group  {\n            width: 303px;\n            left: 0px;\n            margin: auto auto;\n        }\n        #forgotPasswordWhite .form-content .form-group label {\n            display: block !important;\n        }\n       \n        #forgotPasswordWhite .g-recaptcha{\n            position: relative;\n            left: 0;\n            margin-top: 40px;\n        }\n\n        .ab-exp-23_forgotPassword.popup-window .form-content {\n            width: 100% !important;\n        }\n        .ab-exp-23_forgotPassword.popup-window .popup-content .headline {\n            color: #03316c;\n            font-weight: 600;\n            margin-bottom: 30px;\n        }\n        .ab-exp-23_forgotPassword .ab-message-hidden {\n            display: none;\n        }\n        .ab-exp-23_forgotPassword #errorMessage {\n            margin-bottom: 10px;\n            padding: 0;\n        }\n        .ab-exp-23_forgotPassword .form-content .form-group label {\n            margin-bottom: 5px;\n        }\n    }\n</style>",window.exp23a.forgotPassword.popupForm=$('<form method="post" id="formExp23_forgotPassword" novalidate="novalidate" action="">\n    <div class="popup-window ab-exp-23_forgotPassword " id="forgotPasswordWhite">\n        <div class="interactive-container _visible">\n            <div class="background"></div>\n            <div class="outer popup">\n                <div class="wrapper">\n                    <div class="popup-content">\n                        \x3c!-- Close btn --\x3e\n                        <span class="close-btn-holder"> <span class="closeText"><a href="javascript:void(0);">  No, Thank you </a></span><span class="close-btn mck-radial-x-icon" role="link"></span></span>\n                        \x3c!-- Header --\x3e\n                        <div class="up one-up one-up-medium">\n                            <header class="text-xl module-header">\n                                <h3 class="title headline">Forgot your password?</h3>\n                            </header>\n                            <header id="requiredMessageDescription" class="text-m module-header success" style="display: block;">\n                                <div class="description module-description">Please enter the email address you use to sign into your account.</div>\n                            </header>\n                        </div>\n                        \x3c!-- Error / success msg --\x3e\n                        <div class="up one-up one-up-medium" data-module="PopupForm">\n                            <div id="forgotPasswordWhiteContent" class="form-content">\n                                <div id="errorMessage" class="alert error no-pading-bottom no-margin-bottom" style="display: none;">\n                                    \n                                    <p id="main_0_universal_0_errormsg">Sorry something went wrong. Please try again</p>\n                                </div >\n                                <div id="successMessage" class="success-message" style="display: none;">\n                                </div >\n                                \x3c!-- Popup Content--\x3e\n                                <div id="formContent_exp23a_forgotPassword" style="display: block;">\n                                    <div id="emailDiv" class="form-group">\n                                        <div class="controls-group">\n                                            <label for="email_exp23a_forgotPassword">Email</label>\n                                            <input name="email_exp23a_forgotPassword" type="email" maxlength="128" id="email_exp23a_forgotPassword" tabindex="1" data-rule-required="true" data-rule-email="true" data-msg-email="Please enter a valid email address." data-msg-required="Please enter your email address." aria-required="true">\n                                            <span id="emailValidator" style="display: none;"></span>\n                                        </div>\n                                    </div>\n\n\n                                    \n                                    <div class="captcha-wrapper">\n                                        <div id="forgotPasswordCaptcha" class="form-group" data-module="Recaptcha">\n\n\n\n\n\n\n                                        </div>\n                                        <span class="error"></span>\n                                    </div>\n\n\n\n                                    <section class="up two-up">\n                                        <div class="submit_btn">\n                                            <input type="button" name="forgotPasswordWhite_btnSubmit" value="RESET PASSWORD" id="forgotPasswordWhite_btnSubmit" tabindex="3" class="btn-submit">\n                                        </div>\n                                        <div class="noAccount">\n                                            <span><a href="javascript:void(0);" id="fromForgotToSignIn" rel="nofollow">Sign In</a> | \n                                            <a href="javascript:void(0);" id="fromForgotToSignUp" rel="nofollow">Don\'t have an account?</a></span>\n                                        </div>\n                                    </section>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    </div>\n    </div>\n    </div>\n</form>'),window.exp23a.signIn.confirmationAbcss="<style>\n        /* feedback popup */\n        #exp23_signUp_confirmation {\n            position: fixed;\n            right: 0;\n            width: 530px;\n            bottom: -200px;\n            background-color: #00adef;\n            padding: 20px 20px 0px 20px;\n            border: 1px solid lightgray;\n            text-align: center;\n        }\n        #exp23_signUp_confirmation span.close-btn.mck-radial-x-icon {\n            position: absolute;\n            right: 40px;\n            top: 2px;\n        }\n        #exp23_signUp_confirmation .mck-radial-x-icon:before {\n            color: #fff !important;\n        }\n        #exp23_signUp_confirmation h1.confirmationTitle {\n            color: #fff;\n        }\n        #exp23_signUp_confirmation p.confirmationDescription {\n            color: #00306e;\n        }\n        #exp23_signUp_confirmation a {\n            color: #00306e;\n            text-decoration: underline;\n            font-weight: bold;\n        }\n        #exp23_signUp_confirmation .close-btn:before {\n            position: absolute;\n            display: block;\n            z-index: 2;\n            color: #00adef !important;\n        }\n        \n        #exp23_signUp_confirmation .mck-radial-x-icon:after {\n            background-color: #fff !important;\n        }\n        #exp23_signUp_confirmation .close-btn:after {\n            background-color: #e60c0c;\n            border-radius: 50%;\n            content: '';\n            height: 36px;\n            left: 2px;\n            width: 36px;\n            z-index: 1;\n            position: absolute;\n            top: 2px;\n        }\n</style>",window.exp23a.signIn.confirmationHtml=$('<div id="exp23_signUp_confirmation" class="confirmationPopup exp23">\n    <span id="confirmationCloseBtn" class="close-btn mck-radial-x-icon" role="link"></span>\n    <h1 class="confirmationTitle">Thank you for signing up!</h1>\n    <p class="confirmationDescription">Feel free to <a href="/user-registration/manage-account/edit-subscriptions">select your topics of interest</a>  or <a href="/user-registration/manage-account/edit-profile">change your password</a> at any time.</p>\n</div>'),test=function(n){function e(e){return n.apply(this,arguments)}return e.toString=function(){return n.toString()},e}(function(n){return n+"works"}),test("yes ");
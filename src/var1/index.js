//-------------------------------------------------------------------------------- SIGN UP \\
// ------------------------------------- CSS
window.exp23a.signUp.abcss = `<style>
    @media screen and (max-width: 767px) {
        #signUpWhite, #signInWhite, #formExp23_forgotPassword {
            display: none !important;
        }
    }
    
    @media screen and (min-width: 768px) {
        #signUpWhite .popup .wrapper, #signInWhite .popup .wrapper, #forgotPasswordWhite .popup .wrapper {
                top: 0;
                overflow-y: auto;
                overflow-x: hidden;
                height: 100%;
                position: fixed !important;
                left: calc(50%) !important;
                margin: 0 0 0 -350px !important;
                max-width: 700px !important;
        }
        #signUpWhite.ab-exp-23_signUp .popup-content, #signInWhite .popup-content, #forgotPasswordWhite .popup-content {
            width: 660px;
            border-radius: 3px;
        }
        #signInWhite .popup .wrapper::-webkit-scrollbar,#signUpWhite .popup .wrapper::-webkit-scrollbar,#forgotPasswordWhite .popup .wrapper::-webkit-scrollbar { 
            display: none; 
        }
        }
        #signInWhite .popup .wrapper::-moz-scrollbar,#signUpWhite .popup .wrapper::-webkit-scrollbar,#forgotPasswordWhite .popup .wrapper::-webkit-scrollbar { 
            display: none; 
        }
        #signInWhite .popup-content, #signUpWhite .popup-content, #forgotPasswordWhite .popup-content {
            margin: 40px auto auto;
        }
        #signUpWhite .form-content .form-group+.form-group, #signInWhite .form-content .form-group+.form-group, #formExp23_forgotPassword .form-content .form-group+.form-group{
            margin-top: 30px;
        }
        #signUpWhite section.up, #signInWhite section.up, #formExp23_forgotPassword section.up{
            margin-top: 30px;
        }
        .up.one-up.one-up-medium {
            margin-top: 6px !important;
        }
        #signUpWhite .up.one-up.one-up-medium {
            margin-left: 75px;
        }
        .captcha-wrapper{
            margin-top:12px;
        }
        .submit-footer .form-group>p{
            margin: 0;
            font-size:14px;
        }

        /* -- Form close btn  -- */
        .popup-content .closeText {
            position: relative;
            text-align: right;
            font-size: 14px;
            width: 620px;
            top: 9px;
            color: #00ACED;
            display: inline-block;
        }
        .popup-window .popup .popup-content .close-btn {
            margin: 0;
        }
        .popup-window .popup .popup-content .mck-radial-x-icon:before {
            color: #fff !important;
            ;
        }
        .popup-window .popup .popup-content .mck-radial-x-icon:after {
            background-color: #2bafe9 !important;
        }

        #signUpWhite .one-up-medium {
            width: 90%;
        }
        #signUpWhite header {
            text-align: center;
        }
        #signUpWhite input, #signInWhite input {
            border-radius: 3px;
            width: 248px ;
            height: 34px;
            padding: 5px;
        }

        #forgotPasswordWhite input {
            border-radius: 3px;
            height: 34px;
            width: 302px !important;
        }

        #signUpWhite .up.two-up{
            margin: 0;
            width: 100%;
            text-align: center;
        }
        #signUpWhite .form-content .form-group label {
            margin-bottom: 5px;
        }
        
        #signUpWhite #signUpWhite_btnSubmit,  .noAccount {
            margin-top: 20px;
        }
        #signUpWhite .g-recaptcha{
            position: relative;
            left: 100px;
        }

        .form-content .form-group.has-error label {
            
        }
        .popup-window .popup .popup-content{
            padding-bottom: 45px;
        }

        .popup-window .popup .popup-content .up .module-header {
            width:100%;
        }

        .popup-window .popup .popup-content .up .module-header h3 {
            font-size: 42px !important;
            font-family: Chronicle Deck !important;
            font-weight: 600;
            line-height: 1em;
            color: #00306e;
            margin-bottom: 6px !important;
        }

        .popup-window .popup .popup-content .up .module-header .description.module-description {
            font-size: 18px;
            font-family: Chronicle Deck;
            color: #000;
            font-weight: 400;
            line-height: 1.4em;
            margin-top: 20px;
        }

        #signUpWhite.ab-exp-23_signUp.popup-window .form-content_exp23a_signUp {
            width: 100% !important;
        }
        #signUpWhite.ab-exp-23_signUp.popup-window .popup-content .headline {
            color: #03316c;
            font-weight: 600;
            margin-bottom: 30px;
        }
        #signUpWhite.ab-exp-23_signUp .form-row:nth-child(3) {
            margin: 30px 0;
        }
        #signUpWhite.ab-exp-23_signUp .ab-message-hidden {
            display: none;
        }
        #signUpWhite.ab-exp-23_signUp #errorMessage {
            margin-bottom: 10px;
            padding: 0;
        }
        /* -- Form fields  -- */
        #signUpWhite.ab-exp-23_signUp .form-row {
            display: table;
        }
        #signUpWhite.ab-exp-23_signUp .form-row .form-group:nth-child(1) {
            padding-right: 10px;
            display: table-cell;
            width: 50%;
        }
        #signUpWhite.ab-exp-23_signUp .form-row .form-group:nth-child(2) {
            padding-left: 10px;
            display: table-cell;
            width: 50%;
        }
        /* -- Form footer -- */
        #signUpWhite.ab-exp-23_signUp .submit-footer {
            display: table;
            margin-top: 35px;
        }
        #signUpWhite.ab-exp-23_signUp .submit-footer form-group {
            display: table-cell;
        }

        .form-content .form-group.has-error .help-block{
            margin: 0 !important;
            font-size: 12px;
            height: 0;
        }
        .help-block-captcha {
            font-size: 12px !important;
            height:0;
            display: block;
            font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif;
            color: #ed1c24;
            margin: 0;
        }

        #fromSignUpToSignIn, #fromSignInToSignUp, #fromForgotToSignUp, #fromSignInToForgot, #fromForgotToSignIn{
            font-size: 12px;
            font-family: Whitney SSm;
        }
        #input#signUpWhite_btnSubmit, #signInWhite_btnSubmit, #forgotPasswordWhite_btnSubmit{
            font-size: 12px;
        }
    }
</style>`;
// ------------------------------------- HTML
window.exp23a.signUp.popupForm = $(`<form method="post" id="formExp23_SignUp" novalidate="novalidate" action="">
    <div class="popup-window ab-exp-23_signUp " id="signUpWhite">
        <div class="interactive-container _visible">
            <div class="background"></div>
            <div class="outer popup">
                <div class="wrapper">
                    <div class="popup-content" style="margin-top: 40px;">
                        <!-- Close btn -->
                        <span class="close-btn-holder"> <span class="closeText"><a href="javascript:void(0);">  No, Thank you </a></span><span class="close-btn mck-radial-x-icon" role="link"></span></span>
                        <div class="up one-up one-up-medium">
                            <header class="text-xl module-header">
                                <h3 class="title headline">Sign up to keep reading</h3>
                            </header>
                            <header id="requiredMessageDescription" class="text-m module-header success" style="display: block;">
                                <div class="description module-description">Creating your account gives you access to our latest articles and reports. It's fast and free!</div>
                            </header>
                        </div>
                        <div class="up one-up one-up-medium" data-module="PopupForm">
                            <div class="form-content">
                                <!-- Error / success msg -->
                                <div id="errorMessage" class="alert error no-pading-bottom no-margin-bottom" style="display: none;">
                                    
                                    <p id="main_0_universal_0_errormsg">Sorry something went wrong. Please try again</p>
                                </div>
                                <div id="successMessage" class="success-message" style="display: none;">
                                </div>
                                <div id="formContent_exp23a_signUp" style="display: block;">
                                    <div class="form-group ab-message-hidden">
                                        <label for="contactProfileMessageExpTwenty">PERSONAL MESSAGE</label>
                                        <textarea  class="required" data-msg-required="Please provide your message." rows="8" cols="20" maxlength="8192" name="contactProfileMessageExpTwenty" id="contactProfileMessageExpTwenty" autofocus=""></textarea>
                                    </div>
                                    <div class="form-row">
                                        <div class="form-group"> 
                                          <label for="name_exp23a_signUp">NAME</label>
                                            <input  class="required textField" name="name_exp23a_signUp" id="name_exp23a_signUp" maxlength="50" type="text"
                                                data-msg-required="Please provide your name." aria-required="true">
                                        </div>
                                        <div class="form-group"> 
                                          <label for="email_exp23a_signUp">EMAIL</label>
                                            <input  name="email_exp23a_signUp" id="email_exp23a_signUp" maxlength="128" class="required textField " type="email"
                                                data-msg-email="Please provide a valid email address." data-msg-required="Please provide your company email address."
                                                aria-required="true">
                                        </div>
                                    </div>
                                    <div class="form-row">
                                        <div class="form-group"> 
                                          <label for="company_exp23a_signUp">COMPANY</label>
                                            <input  class="required textField" name="company_exp23a_signUp" data-msg-required="Please provide an organization name."
                                                id="company_exp23a_signUp" maxlength="50" type="text" data-rule-spam="true"
                                                data-msg-spam="Please provide a valid company name." data-pattern="[\<>%?^()]"
                                                aria-required="true">
                                        </div>

                                        <div class="form-group"> 
                                          <label for="role_exp23a_signUp">ROLE</label>
                                            <input  class="required textField" name="role_exp23a_signUp" id="role_exp23a_signUp" maxlength="50" data-msg-required="Please provide a role."
                                                type="text" data-rule-spam="true" data-msg-spam="Please provide a valid title."
                                                aria-required="true">
                                        </div>
                                    </div>

                                    <section class="up two-up">
                                        <div class="captcha-wrapper">
                                            <div id="signUpCaptcha" class="form-group" data-module="Recaptcha">

                                                


                                              <div id="recaptchaElement"  data-callback="exp23captchaCallback" class="g-recaptcha" data-sitekey="6LdC5twSAAAAAF0dePIbY_ckeF05mKdYYJXn7uTg"></div>
                  



                                            </div>
                                            <span class="error"></span>
                                        </div>

                                    <div class="submit-footer">
                                        <div class="form-group">
                                            <p>From time to time we may send you email, but you can opt out at any time.</p>
                                            <input  name="signUpWhite_btnSubmit"  id="signUpWhite_btnSubmit" type="button" value="KEEP READING" class="btn-submit">
                                        </div>

                                        <div class="noAccount">
                                            <span><a href="javascript:void(0);" id="fromSignUpToSignIn" rel="nofollow">Have an account?</a></span>
                                        </div>
                                    </div>

                                    </section>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</form>`);
// ------------------------------------- POPUP PROPERTIES

//-------------------------------------------------------------------------------- SIGN IN \\
// ------------------------------------- CSS
window.exp23a.signIn.abcss = `<style>
    @media screen and (max-width: 767px) {
        .popup-window.ab-exp-23_signIn {
            display: none !important;
        }
    }
    
    @media screen and (min-width: 768px) {
        #signInWhite header {
            text-align: center;
        }
        #signInWhite #signInWhiteContent {
            width: 100%;
            text-align: center;
        }
        .form-content .form-group .controls-group {
            text-align: left;
            display: inline-table;
        }
        #signInWhite .form-content .form-group label {
            display: block !important;
        }
        

        .ab-exp-23_signIn.popup-window .form-content {
            width: 100% !important;
        }
        .ab-exp-23_signIn.popup-window .popup-content .headline {
            color: #03316c;
            font-weight: 600;
            margin-bottom: 30px;
        }
        .ab-exp-23_signIn .ab-message-hidden {
            display: none;
        }
        .ab-exp-23_signIn #errorMessage {
            margin-bottom: 10px;
            padding: 0;
        }

        #signInWhite .form-content .form-group label {
            margin-bottom: 5px;
        }

    }
</style>`;
// ------------------------------------- HTML
window.exp23a.signIn.popupForm = $(`<form method="post" id="formExp23_SignIn" novalidate="novalidate" action="" >
    <div class="popup-window ab-exp-23_signIn " id="signInWhite">
        <div class="interactive-container _visible">
            <div class="background"></div>
            <div class="outer popup">
                <div class="wrapper">
                    <div class="popup-content">
                        <!-- Close btn -->
                       <span class="close-btn-holder"> <span class="closeText"><a href="javascript:void(0);">  No, Thank you </a></span><span class="close-btn mck-radial-x-icon" role="link"></span></span>
                        <!-- Header -->
                        <div class="up one-up one-up-medium">
                            <header class="text-xl module-header">
                                <h3 class="title headline">Sign in to keep reading</h3>
                            </header>
                            <header id="requiredMessageDescription" class="text-m module-header success" style="display: block;">
                                <div class="description module-description">Welcome back. Signing in gives you access to our latest articles and reports.</div>
                            </header>
                        </div>
                        <div class="up one-up one-up-medium" data-module="PopupForm">
                            <div id="signInWhiteContent" class="form-content">
                                <!-- Error / success msg -->
                                <div id="errorMessage" class="alert error no-pading-bottom no-margin-bottom" style="display: none;">
                                   
                                    <p id="main_0_universal_0_errormsg">Sorry something went wrong. Please try again</p>
                                </div >
                                <div id="successMessage" class="success-message" style="display: none;">
                                </div >
                                <!-- Popup Content-->
                                <div id="formContent_exp23a_signIn" style="display: block;">
                                    <div id="emailDiv" class="form-group">
                                        <div class="controls-group">
                                            <label for="email_exp23a_signIn">Email</label>
                                            <input class="required textField" name="email_exp23a_signIn" type="email" maxlength="128" id="email_exp23a_signIn" tabindex="1" data-rule-required="true" data-rule-email="true" data-msg-email="Please enter a valid email address." data-msg-required="Please enter your email address." aria-required="true">
                                            <span id="emailValidator" style="display: none;"></span>
                                        </div>
                                    </div>
                                    <div id="changePasswordDiv" class="form-group">
                                        <div class="controls-group">
                                            <label id="lblPassword" for="password_exp23a_signIn"> Password</label>
                                            <input class="required textField" name="password_exp23a_signIn" type="password" maxlength="15" id="password_exp23a_signIn" tabindex="2" data-rule-required="true" data-msg-required="Please enter your password." autocomplete="off" aria-required="true">
                                            <span id="PasswordValidator" style="display: none;"></span>
                                        </div>
                                    </div>
                                    <section class="up two-up">
                                        <div class="submit_btn">
                                            <input tabindex="3" id="signInWhite_btnSubmit" type="button" value="KEEP READING" name="signInWhite_btnSubmit" class="btn-submit">
                                        </div>
                                        <div class="noAccount">
                                            <span><a href="javascript:void(0);" id="fromSignInToForgot" rel="nofollow">Forgot password?</a> | 
                                            <a href="javascript:void(0);" id="fromSignInToSignUp" rel="nofollow">Don't have an account?</a></span>
                                        </div>
                                    </section>
                                    <input name="__RequestVerificationToken" type="hidden" value="PJhPQ0vqeq0OLXAbdjIQV5qp778e8Nhrx98r2dH1-OnN2JtCfxXz5QQJ1Bx3i1ndyyIRhp9R6I9TGGJzbhPs1xBFoeY1">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
    </div>
    </div>
</form>`);
// ------------------------------------- POPUP PROPERTIES

//-------------------------------------------------------------------------------- FORGOT PASSWORD \\
// ------------------------------------- CSS
window.exp23a.forgotPassword.abcss = `<style>
    @media screen and (max-width: 767px) {
        .popup-window.ab-exp-23_forgotPassword {
            display: none !important;
        }
    }
    
    @media screen and (min-width: 768px) {


        
        #forgotPasswordWhite header {
            text-align: center;
        }
        #forgotPasswordWhite #forgotPasswordWhiteContent {
            width: 100%;
            text-align: center;
        }
        #forgotPasswordWhite .form-content .form-group  {
            width: 303px;
            left: 0px;
            margin: auto auto;
        }
        #forgotPasswordWhite .form-content .form-group label {
            display: block !important;
        }
       
        #forgotPasswordWhite .g-recaptcha{
            position: relative;
            left: 0;
            margin-top: 40px;
        }

        .ab-exp-23_forgotPassword.popup-window .form-content {
            width: 100% !important;
        }
        .ab-exp-23_forgotPassword.popup-window .popup-content .headline {
            color: #03316c;
            font-weight: 600;
            margin-bottom: 30px;
        }
        .ab-exp-23_forgotPassword .ab-message-hidden {
            display: none;
        }
        .ab-exp-23_forgotPassword #errorMessage {
            margin-bottom: 10px;
            padding: 0;
        }
        .ab-exp-23_forgotPassword .form-content .form-group label {
            margin-bottom: 5px;
        }
    }
</style>`;
// ------------------------------------- HTML
window.exp23a.forgotPassword.popupForm = $(`<form method="post" id="formExp23_forgotPassword" novalidate="novalidate" action="">
    <div class="popup-window ab-exp-23_forgotPassword " id="forgotPasswordWhite">
        <div class="interactive-container _visible">
            <div class="background"></div>
            <div class="outer popup">
                <div class="wrapper">
                    <div class="popup-content">
                        <!-- Close btn -->
                        <span class="close-btn-holder"> <span class="closeText"><a href="javascript:void(0);">  No, Thank you </a></span><span class="close-btn mck-radial-x-icon" role="link"></span></span>
                        <!-- Header -->
                        <div class="up one-up one-up-medium">
                            <header class="text-xl module-header">
                                <h3 class="title headline">Forgot your password?</h3>
                            </header>
                            <header id="requiredMessageDescription" class="text-m module-header success" style="display: block;">
                                <div class="description module-description">Please enter the email address you use to sign into your account.</div>
                            </header>
                        </div>
                        <!-- Error / success msg -->
                        <div class="up one-up one-up-medium" data-module="PopupForm">
                            <div id="forgotPasswordWhiteContent" class="form-content">
                                <div id="errorMessage" class="alert error no-pading-bottom no-margin-bottom" style="display: none;">
                                    
                                    <p id="main_0_universal_0_errormsg">Sorry something went wrong. Please try again</p>
                                </div >
                                <div id="successMessage" class="success-message" style="display: none;">
                                </div >
                                <!-- Popup Content-->
                                <div id="formContent_exp23a_forgotPassword" style="display: block;">
                                    <div id="emailDiv" class="form-group">
                                        <div class="controls-group">
                                            <label for="email_exp23a_forgotPassword">Email</label>
                                            <input name="email_exp23a_forgotPassword" type="email" maxlength="128" id="email_exp23a_forgotPassword" tabindex="1" data-rule-required="true" data-rule-email="true" data-msg-email="Please enter a valid email address." data-msg-required="Please enter your email address." aria-required="true">
                                            <span id="emailValidator" style="display: none;"></span>
                                        </div>
                                    </div>


                                    
                                    <div class="captcha-wrapper">
                                        <div id="forgotPasswordCaptcha" class="form-group" data-module="Recaptcha">






                                        </div>
                                        <span class="error"></span>
                                    </div>



                                    <section class="up two-up">
                                        <div class="submit_btn">
                                            <input type="button" name="forgotPasswordWhite_btnSubmit" value="RESET PASSWORD" id="forgotPasswordWhite_btnSubmit" tabindex="3" class="btn-submit">
                                        </div>
                                        <div class="noAccount">
                                            <span><a href="javascript:void(0);" id="fromForgotToSignIn" rel="nofollow">Sign In</a> | 
                                            <a href="javascript:void(0);" id="fromForgotToSignUp" rel="nofollow">Don't have an account?</a></span>
                                        </div>
                                    </section>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
    </div>
    </div>
</form>`);
// ------------------------------------- POPUP PROPERTIES

//-------------------------------------------------------------------------------- FEEDBACK \\
// ------------------------------------- CSS
window.exp23a.signIn.confirmationAbcss = `<style>
        /* feedback popup */
        #exp23_signUp_confirmation {
            position: fixed;
            right: 0;
            width: 530px;
            bottom: -200px;
            background-color: #00adef;
            padding: 20px 20px 0px 20px;
            border: 1px solid lightgray;
            text-align: center;
        }
        #exp23_signUp_confirmation span.close-btn.mck-radial-x-icon {
            position: absolute;
            right: 40px;
            top: 2px;
        }
        #exp23_signUp_confirmation .mck-radial-x-icon:before {
            color: #fff !important;
        }
        #exp23_signUp_confirmation h1.confirmationTitle {
            color: #fff;
        }
        #exp23_signUp_confirmation p.confirmationDescription {
            color: #00306e;
        }
        #exp23_signUp_confirmation a {
            color: #00306e;
            text-decoration: underline;
            font-weight: bold;
        }
        #exp23_signUp_confirmation .close-btn:before {
            position: absolute;
            display: block;
            z-index: 2;
            color: #00adef !important;
        }
        
        #exp23_signUp_confirmation .mck-radial-x-icon:after {
            background-color: #fff !important;
        }
        #exp23_signUp_confirmation .close-btn:after {
            background-color: #e60c0c;
            border-radius: 50%;
            content: '';
            height: 36px;
            left: 2px;
            width: 36px;
            z-index: 1;
            position: absolute;
            top: 2px;
        }
</style>`;
// ------------------------------------- HTML
window.exp23a.signIn.confirmationHtml = $(`<div id="exp23_signUp_confirmation" class="confirmationPopup exp23">
    <span id="confirmationCloseBtn" class="close-btn mck-radial-x-icon" role="link"></span>
    <h1 class="confirmationTitle">Thank you for signing up!</h1>
    <p class="confirmationDescription">Feel free to <a href="/user-registration/manage-account/edit-subscriptions">select your topics of interest</a>  or <a href="/user-registration/manage-account/edit-profile">change your password</a> at any time.</p>
</div>`);
//-------------------------------------------------------------------------------- FEEDBACK // ^^^

test = text => text + "works";

test("yes ");

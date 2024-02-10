<?php
require_once '../../vendor/autoload.php';
require_once '../defs.php';

use myExplorer\Repository\User as UserRep;
use myExplorer\Request;

$user = (new UserRep())->getRecord(Request::get('userId'));
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <title>Edit User</title>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <link href="../assets/css/page.css" rel="stylesheet">
    <script src="../assets/js/userdialog-combined.js"></script>
</head>

<body>
<form method="post" action="./userdialog.php?userId=1" onsubmit="javascript:return WebForm_OnSubmit();" id="form1"
      autocomplete="off">
    <div class="aspNetHidden">
        <input type="hidden" name="__EVENTTARGET" id="__EVENTTARGET" value=""/>
        <input type="hidden" name="__EVENTARGUMENT" id="__EVENTARGUMENT" value=""/>
        <input type="hidden" name="__VIEWSTATE" id="__VIEWSTATE"
               value="eMH1/2Uw04PTBwbH70u6mk64orl5TiU9ZhRpiwq1blNhfhwkty1zarpCkyV9cqedQmvs1QD+zUVAQzJDegbM0ZOjHEnCHARlm1eK6DudeXjtnpKXCgTXaBhRv21zfA7uxL0esx5fBitkbWGdgoQcJd49EDAdpWPsBawMvjHcH2y7e0vDzRwUM1BWYPWYCKwBUDKvj2x+tr/qVDbZZTElgn0oP6lN1r6lwlxKzu/qG00sIWF9fezDpSRbd9z0afKIvknXCk9dkMrc4zjH9Os4zsgAQvbeIxrpdq5k9i05iwOIjDyByU/d8Kmxbjtk2WmcK28FuXdAb5stF86+9yME0ZzSrxMY78xzxozlBndndAjcpiz+FDnMtiMgzMNy+9WJph68qcT4QMQ4gE8RQV4KCKH7vAEdsoXmvkJWAXhyqlOGQ1oOmPO0Bd0x4L3SwdpA8U+7SDoctui4kOtHAydO16XZ7HJAJRi3xsCfHKS+NjqCqzliYDnWpxYoMJTKsLcVORbMHkipmX0NhIFO4LsnF/a4VnPDqY3PMKwTsSR4vm5KnvnpR33UoVxIJa5JIAxXPnU1GyTqGNIbNo02r2EKB+yeQGYwXDLhRkc0SvUm2UywMUQ/2O+5Wgkn5HdDfU0uH35gnTQeVpaptrrY/gU1seOfwE5fqMfsC/3n//2LkVU1kS3UJdGBj9XbTLED6SSl/v+wN5ajuzdkcDCJfPybVsKKfVlyNZXQlzNxqRJ6t3cHWKNGPtpjGrpgX/3F8Rx4dMkv/BTRsElvF0XEcMzbqTBKIGvSM8obygWAkkD5A+33nnfwKE8eFuyOpCGHibEJTgbhWgy3E6BfKHKoa7CfxTq2jrRqEfcx9IEvW3Cax+dIvx0MajZri66Vjpi3htWflaIPXor1tHcXHXTwjGqbr+NHJ0R68DW6gRiW6ulr/QdETWqBwriJhtbSVkkD4HZYqAd2Q5Y0BQyQWsGdZfAe1TY0XS4215LfMCbweWjbUxNrdtutCmcRyEbkeAaWvVjVzUwrleUMzJl7W+6IsONZeoCSciWYXNEyQgIFkV87eFVQtdtmbaZ+nWbfaGyx/h51cXaigXtk3+avPHrK1iBBw+ZexAiEh7tRu2JBpCT/lfsbD8tfsJLdh/7L9weGb+MbgPoYUOjDtRdVWs1xOo0luXoAaScOZPiQvVGX2kG2Q5R/BBDqNraU63b0DpNUDHdHJqTUmQUdSx/i5ijig/DYm5UVjDQ0/RmtRuqu2CiubAgh0vI0i3Xne+XZLI65Xe+W373YHrNROsaq+QpfHveUmmW6IVVoVr3uhHBXoYMLp5K8+vnXkq5eTQqqeJZ0AQxkGPoyw7khoLU0g0+APxNmYVs3+qe6XYE35GPv2mFlDMheavZKXb4d6s14tmiQeKS0Pf3IijL8GgKQi+DVRXlpCw=="/>
    </div>

    <script type="text/javascript">
        //<![CDATA[
        var theForm = document.forms['form1'];
        if (!theForm) {
            theForm = document.form1;
        }

        function __doPostBack(eventTarget, eventArgument) {
            if (!theForm.onsubmit || (theForm.onsubmit() != false)) {
                theForm.__EVENTTARGET.value = eventTarget;
                theForm.__EVENTARGUMENT.value = eventArgument;
                theForm.submit();
            }
        }

        //]]>
    </script>
    <script src="/FileVista/WebResource.axd?d=pynGkmcFUV13He1Qd6_TZJqudtMhWIqKaJBIngPi6Ofik5BDSdCWYKUX3Cpa6gP4OqTU6SZctnHjrqxCws_xQA2&amp;t=638368778615952268"
            type="text/javascript"></script>
    <script src="/FileVista/WebResource.axd?d=x2nkrMJGXkMELz33nwnakB5ZOlA207Tpj---3VAUK06oHn-hZa3a6wj5GEJHMvTLSIXjXPsRo5oarmlMnN7fF5HFBzAKpB7qAegkl7v5juU1&amp;t=638368778615952268"
            type="text/javascript"></script>
    <script type="text/javascript">
        //<![CDATA[
        function WebForm_OnSubmit() {
            if (typeof (ValidatorOnSubmit) == "function" && ValidatorOnSubmit() == false) return false;
            return true;
        }

        //]]>
    </script>

    <div class="aspNetHidden">
        <input type="hidden" name="__VIEWSTATEGENERATOR" id="__VIEWSTATEGENERATOR" value="CCF9CB0C"/>
        <input type="hidden" name="__EVENTVALIDATION" id="__EVENTVALIDATION"
               value="O9ABE13pouubULkfTGK0eKm2JVsD5KGt4P9+6UGl1V1eLfI7+vtCvcZJ747EPJOOhYX8EgwFkLaHZt8POlzv8+Svy7xBjiDFwKTjDCiRlnvOf2HhbzbW3FRWS4hbDISU7l//atdEQIG7BvH4anp+2QJbIAcwNKNEyYM+YleMWIog31vR/OxrQgV3rRcG9QoKpvHuyL0H8bQ2BLjEz8oWGhEHN/JbyqdbKwBzGgjOQmKhRUQORpToPuAyfN/ghusOu34XNbmQeoZMC2mA54eGQuhuzhCf4UvaZOYS5WQGR0stTVHmlATn9vi4hbtdJ9wOvQexqTDY0GXdBWvhByXxcSDfcLE46vuGrdKzyM5mIiYJTvKJuYg5i+ex3F/Qg5OYkGKpfoj9Y8YXE36p+F9Pc7EneSjZniKa7c3bE0HdAXWwzVi+0+Md2r6C8qI4NwT8"/>
    </div>
    <input type="hidden" name="ClientMessage" id="ClientMessage"/>
    <input type="hidden" name="OnLoadCommand" id="OnLoadCommand"/>
    <div id="ValidationSummary1" style="display:none;">

    </div>
    <table cellpadding="0" cellspacing="0" border="0" style="width: 100%">
        <tr valign="top">
            <td>
                <table cellpadding="4" cellspacing="0" border="0">
                    <tr>
                        <td style="width: 100px">User name:</td>
                        <td>
                            <input name="Username" type="text" value="<?=$user['name']?>" maxlength="50" id="Username"
                                   disabled="disabled" class="aspNetDisabled" style="width: 250px"/>
                            <span id="RequiredFieldValidator1" style="visibility:hidden;">!</span>
                        </td>
                    </tr>
                    <tr>
                        <td>Full name:</td>
                        <td><input name="Fullname" type="text" value="<?=$user['full_name']?>" maxlength="50" id="Fullname"
                                   style="width: 250px"/></td>
                    </tr>
                    <tr>
                        <td>Email:</td>
                        <td>
                            <input name="Email" type="text" value="<?=$user['email']?>" maxlength="50" id="Email" style="width: 250px"/>
                            <span id="RegularExpressionValidator1" style="visibility:hidden;">!</span>
                        </td>
                    </tr>
                    <tr>
                        <td>Description:</td>
                        <td><input name="Description" type="text" value="<?=$user['description']?>" maxlength="100" id="Description"
                                   style="width: 250px"/></td>
                    </tr>
                    <tr>
                        <td colspan="2">
                            <hr/>
                        </td>
                    </tr>
                    <tr>
                        <td colspan="2">
                            <input id="CheckBoxChangePassword" type="checkbox" name="CheckBoxChangePassword"
                                   onclick="onChangePasswordClick();"/><label for="CheckBoxChangePassword">Change
                                password</label>
                            <table cellpadding="4" cellspacing="0" border="0"
                                   style="margin-left: 20px; margin-top: 5px">
                                <tr>
                                    <td><label for="Password" id="LabelPassword" class="disabled">Password:</label></td>
                                    <td align="right">
                                        <input name="Password" type="password" id="Password" disabled="disabled"
                                               class="aspNetDisabled" style="width: 150px"/>
                                        <span id="RequiredFieldValidator2" style="visibility:hidden;">!</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td><label for="PasswordConfirm" id="LabelPasswordConfirm" class="disabled">Confirm
                                            Password:</label></td>
                                    <td align="right">
                                        <input name="PasswordConfirm" type="password" id="PasswordConfirm"
                                               disabled="disabled" class="aspNetDisabled" style="width: 150px"/>
                                        <span id="CompareValidator1" style="visibility:hidden;">!</span>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                    <tr>
                        <td colspan="2">
                            <input id="CheckBox3" type="checkbox" name="CheckBox3"
                                   onclick="enableElement(&#39;CheckBox1&#39;, !this.checked); enableElement(&#39;CheckBox2&#39;, !this.checked);"/><label
                                    for="CheckBox3">User must change password at next login</label>
                            <br/><input id="CheckBox2" type="checkbox" name="CheckBox2"
                                        onclick="enableElement(&#39;CheckBox3&#39;, !(this.checked || document.getElementById(&#39;CheckBox1&#39;).checked));"/><label
                                    for="CheckBox2">User cannot change password</label>
                            <br/><input id="CheckBox1" type="checkbox" name="CheckBox1" checked="checked"
                                        onclick="enableElement(&#39;CheckBox3&#39;, !(this.checked || document.getElementById(&#39;CheckBox2&#39;).checked));"/><label
                                    for="CheckBox1">Password never expires</label>
                        </td>
                    </tr>


                    <tr>
                        <td colspan="2">
                            <hr/>
                        </td>
                    </tr>
                    <tr>
                        <td colspan="2">
                            <input id="CheckBox4" type="checkbox" name="CheckBox4"/><label for="CheckBox4">Account is
                                disabled</label>
                            <br/><span class="aspNetDisabled"><input id="CheckBox5" type="checkbox" name="CheckBox5"
                                                                     disabled="disabled"/><label for="CheckBox5">Account is locked out</label></span>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
    </table>
    <div class="gt-formBottom"><input type="submit" name="Button1" value="OK"
                                      onclick="javascript:WebForm_DoPostBackWithOptions(new WebForm_PostBackOptions(&quot;Button1&quot;, &quot;&quot;, true, &quot;&quot;, &quot;&quot;, false, false))"
                                      id="Button1" style="width: 80px"/>&nbsp;<input type="submit" name="Button2"
                                                                                     value="Cancel"
                                                                                     onclick="elementDialog.close(); return false;WebForm_DoPostBackWithOptions(new WebForm_PostBackOptions(&quot;Button2&quot;, &quot;&quot;, true, &quot;&quot;, &quot;&quot;, false, false))"
                                                                                     id="Button2" style="width: 80px"/>
    </div>

    <script type="text/javascript">
        //<![CDATA[
        var Page_ValidationSummaries = new Array(document.getElementById("ValidationSummary1"));
        var Page_Validators = new Array(document.getElementById("RequiredFieldValidator1"), document.getElementById("RegularExpressionValidator1"), document.getElementById("RequiredFieldValidator2"), document.getElementById("CompareValidator1"));
        //]]>
    </script>

    <script type="text/javascript">
        //<![CDATA[
        var ValidationSummary1 = document.all ? document.all["ValidationSummary1"] : document.getElementById("ValidationSummary1");
        ValidationSummary1.showmessagebox = "True";
        ValidationSummary1.showsummary = "False";
        var RequiredFieldValidator1 = document.all ? document.all["RequiredFieldValidator1"] : document.getElementById("RequiredFieldValidator1");
        RequiredFieldValidator1.controltovalidate = "Username";
        RequiredFieldValidator1.errormessage = "Please fill in \'User name\' field!";
        RequiredFieldValidator1.evaluationfunction = "RequiredFieldValidatorEvaluateIsValid";
        RequiredFieldValidator1.initialvalue = "";
        var RegularExpressionValidator1 = document.all ? document.all["RegularExpressionValidator1"] : document.getElementById("RegularExpressionValidator1");
        RegularExpressionValidator1.controltovalidate = "Email";
        RegularExpressionValidator1.errormessage = "Email is in wrong format!";
        RegularExpressionValidator1.evaluationfunction = "RegularExpressionValidatorEvaluateIsValid";
        RegularExpressionValidator1.validationexpression = "\\w+([-+.\']\\w+)*@\\w+([-.]\\w+)*\\.\\w+([-.]\\w+)*";
        var RequiredFieldValidator2 = document.all ? document.all["RequiredFieldValidator2"] : document.getElementById("RequiredFieldValidator2");
        RequiredFieldValidator2.controltovalidate = "Password";
        RequiredFieldValidator2.errormessage = "Please fill in \'Password\' field!";
        RequiredFieldValidator2.enabled = "False";
        RequiredFieldValidator2.evaluationfunction = "RequiredFieldValidatorEvaluateIsValid";
        RequiredFieldValidator2.initialvalue = "";
        var CompareValidator1 = document.all ? document.all["CompareValidator1"] : document.getElementById("CompareValidator1");
        CompareValidator1.controltovalidate = "Password";
        CompareValidator1.errormessage = "Passwords don\'t match!";
        CompareValidator1.evaluationfunction = "CompareValidatorEvaluateIsValid";
        CompareValidator1.controltocompare = "PasswordConfirm";
        CompareValidator1.controlhookup = "PasswordConfirm";
        //]]>
    </script>


    <script type="text/javascript">
        //<![CDATA[

        var Page_ValidationActive = false;
        if (typeof (ValidatorOnLoad) == "function") {
            ValidatorOnLoad();
        }

        function ValidatorOnSubmit() {
            if (Page_ValidationActive) {
                return ValidatorCommonOnSubmit();
            } else {
                return true;
            }
        }

        //]]>
    </script>
</form>
</body>
</html>
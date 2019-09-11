/*
$str = <<<EOD
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Neopolitan Welcome Email</title>
  <!-- Designed by https://github.com/kaytcat -->
  <!-- Robot header image designed by Freepik.com -->

  <style type="text/css">
  @import url(http://fonts.googleapis.com/css?family=Droid+Sans);



  img {
    max-width: 600px;
    outline: none;
    text-decoration: none;
    -ms-interpolation-mode: bicubic;
  }

  a {
    text-decoration: none;
    border: 0;
    outline: none;
    color: #bbbbbb;
  }

  a img {
    border: none;
  }

  

  td, h1, h2, h3  {
    font-family: Helvetica, Arial, sans-serif;
    font-weight: 400;
  }

  td {
    text-align: center;
  }

  body {
    -webkit-font-smoothing:antialiased;
    -webkit-text-size-adjust:none;
    width: 100%;
    height: 100%;
    color: #37302d;
    background: #ffffff;
    font-size: 16px;
  }

   table {
    border-collapse: collapse !important;
  }

  .headline {
    color: #ffffff;
    font-size: 36px;
  }

 .force-full-width {
  width: 100% !important;
 }




  </style>

  <style type="text/css" media="screen">
      @media screen {
         
        td, h1, h2, h3 {
          font-family: 'Droid Sans', 'Helvetica Neue', 'Arial', 'sans-serif' !important;
        }
      }
  </style>

  <style type="text/css" media="only screen and (max-width: 480px)">
    
    @media only screen and (max-width: 480px) {

      table[class="w320"] {
        width: 320px !important;
      }


    }
  </style>
</head>
<body class="body" style="padding:0; margin:0; display:block; background:#ffffff; -webkit-text-size-adjust:none" bgcolor="#ffffff">
<table align="center" cellpadding="0" cellspacing="0" width="100%" height="100%" >
  <tr>
    <td align="center" valign="top" bgcolor="#ffffff"  width="100%">
      <center>
        <table style="margin: 0 auto;" cellpadding="0" cellspacing="0" width="600" class="w320">
          <tr>
            <td align="center" valign="top">

                <table style="margin: 0 auto;" cellpadding="0" cellspacing="0" width="100%" style="margin:0 auto;">
                  <tr>
                    <td style="font-size: 30px; text-align:center;"><br>
                            <img src="data:image/png;base64,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" width="200"  alt="meter image">
                      <br>
                      <br>
                    </td>
                  </tr>
                </table>

                <table style="margin: 0 auto;" cellpadding="0" cellspacing="0" width="100%" bgcolor="#4dbfbf">
                  <tr>
                    <td>
                    <br>
                      <img src="https://www.filepicker.io/api/file/Pv8CShvQHeBXdhYu9aQE" width="216" height="189" alt="robot picture">
                    </td>
                  </tr>
                  <tr>
                    <td class="headline">
                       $subject Anfrage
                    </td>
                  </tr>
                  <tr>
                    <td>

                      <center>
                        <table style="margin: 0 auto;" cellpadding="0" cellspacing="0" width="60%">
                          <tr>
                            <td style="color:#187272;">
      <br>
                            <table style="margin: 0 auto;text-align:left" border="1" cellpadding="0" cellspacing="0" width="100%">
                            <tr>
                              <td style="text-align: left">Name:</td>
                              <td style="text-align: left">$name</td>
                              </tr>
                            <tr>
                              <td style="text-align: left">Firmenname:</td>
                              <td style="text-align: left">$companyName</td>
                              </tr>
                            <tr>
                              <td style="text-align: left">Telefon:</td>
                              <td style="text-align: left">$phone</td>
                              </tr>
                            <tr>
                              <td style="text-align: left">E-Mail:</td>
                              <td style="text-align: left">$email</td>
                              </tr>

                              </table>
                            <br>
                             $message
                            <br>
                            <br>
                            </td>
                          </tr>
                        </table>
                      </center>

                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div><!--[if mso]>
                        <v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="http://" style="height:50px;v-text-anchor:middle;width:200px;" arcsize="8%" stroke="f" fillcolor="#178f8f">
                          <w:anchorlock/>
                          <center>
                        <![endif]-->
                            <a href="http://"
                      style="background-color:#178f8f;border-radius:4px;color:#ffffff;display:inline-block;font-family:Helvetica, Arial, sans-serif;font-size:16px;font-weight:bold;line-height:50px;text-align:center;text-decoration:none;width:200px;-webkit-text-size-adjust:none;">Phoenix öffnen</a>
                        <!--[if mso]>
                          </center>
                        </v:roundrect>
                      <![endif]--></div>
                      <br>
                      <br>
                    </td>
                  </tr>
                </table>

               

                <table style="margin: 0 auto;" cellpadding="0" cellspacing="0" class="force-full-width" bgcolor="#414141" style="margin: 0 auto">
                  <tr>
                    <td style="background-color:#414141;">
                    <br>
                      <br>
                    </td>
                  </tr>
                  <tr>
                    <td style="color:#bbbbbb; font-size:12px;">
                       © 2019 SOLUTAS GmbH, Paradieshofstrasse 117, Basel, Schweiz
                       <br>
                       <br>
                       <br>
                       <br>
                    </td>
                  </tr>
                </table>





            </td>
          </tr>
        </table>
    </center>
    </td>
  </tr>
</table>
</body>
</html>
EOD;*/
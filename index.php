<?
session_start();
?>
<!--including here the headers of the web from the includes directory-->

<?php
include './includes/headers.php';
?>
   
   <!--including here the register form for registering-->

   <?php
include './forms/register.php';
?>
    <!--including here the login of the web-->


    <?php
    
include './forms/login.php';
?>
   
<!--including here the add expenses of the web-->

   <?php
include './forms/add_expense.php';
?>
  <!--including here the displaying all ptoducts of the web-->
  
   <?php
include './forms/view.php';
?>
<!--including here the footers of the web-->
<?php
include './includes/footers.php';
?>

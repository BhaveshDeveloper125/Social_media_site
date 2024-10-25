<h1>
    Registration Page
</h1>

<form action="/register" method="post">
    @csrf
    <input type="text" name="name" placeholder="name" > <br><br>
    <input type="email" name="email" placeholder="E-mail" > <br><br>
    <input type="password" name="password" placeholder="Password" > <br><br>
    <input type="password" name="password_confirm" placeholder="Confirm Password"> <br><br>
    <input type="submit" value="Register"> <br><br>
</form>
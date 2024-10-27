<h1>
    Welcome Page
</h1>

<a href="/login">Login</a>

<a href="/register">Register</a>

<form action="/logout" method="post">
    @csrf
    <input type="submit" value="Logout">
</form>
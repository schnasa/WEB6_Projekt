<!DOCTYPE html>
<html>
<head>
    <title></title>
</head>
<body>
<ul>
    @foreach ($suchender as $suchender)
        <li><a href="nachhilfegeber/{{$suchender->id}}">
                {{$suchender->lastName}}</a></li>
    @endforeach
</ul>
</body>
</html>

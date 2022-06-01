<!DOCTYPE html>
<html>
<head>
    <title></title>
</head>
<body>
<ul>
    @foreach ($nachhilfegeber as $nachhilfe)
        <li><a href="nachhilfegeber/{{$nachhilfe->id}}">
                {{$nachhilfe->lastName}}</a></li>
    @endforeach
</ul>
</body>
</html>

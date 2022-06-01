<!DOCTYPE html>
<html>
<head>
    <title></title>
</head>
<body>
<ul>

    @foreach ($lvas as $lva)
        <li><a href="lvas/{{$lva->id}}">
                {{$lva->name}}</a></li>
    @endforeach
</ul>
</body>
</html>

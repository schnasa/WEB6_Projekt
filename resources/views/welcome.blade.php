<!DOCTYPE html>
<html>
    <head>
    </head>
    <body>
    <ul>
        @foreach($lvas as $lva)
            <li>{{$lva->name}} {{$lva->level}} {{$lva->description}}</li>
        @endforeach
    </ul>
    </body>
</html>

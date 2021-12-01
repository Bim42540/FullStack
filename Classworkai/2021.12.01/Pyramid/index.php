
$firstExample = "1<br>22<br>333<br>4444<br>55555<br>666666<br>7777777<br>88888888<br>999999999<br>";

echo $firstExample;

echo "===========================================<br>";

function Pyramid($n)
{
    $num = 1;
    for ($i = 0; $i < $n; $i++)
    {
        for ($j = 0; $j <= $i; $j++ )
        {
            echo $num."";
        }
            $num = $num + 1;
        echo "<br>";
    }
}

$n = 9;

Pyramid($n);

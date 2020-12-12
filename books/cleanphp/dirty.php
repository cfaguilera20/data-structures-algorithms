<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dirty PHP</title>
</head>
<body>
    <?php $results = mysql_query('SELECT * FROM table ORDER BY column'); ?>
    <h2>Customers</h2>
    <ul>
        <?php while ($customer = mysql_fetch_assoc($results)): ?>
        <li><?php echo $customer['column']; ?>
        </li>
        <?php endwhile;?>
    </ul>
</body>
</html>

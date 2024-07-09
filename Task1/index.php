<?php
session_start();
if (!isset($_SESSION['username'])) {
    header("Location: login.php");
    exit();
}
require_once 'db.php';

$filter = '';
if (isset($_GET['filter'])) {
    $filter = $_GET['filter'];
}

$sql = "SELECT * FROM form_entries WHERE name LIKE '%$filter%'";
$result = $conn->query($sql);
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dashboard</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="container">
        <h2>Dashboard</h2>
        <form action="dashboard.php" method="GET">
            <div class="form-group">
                <label for="filter">Filter by name:</label>
                <input type="text" id="filter" name="filter" value="<?php echo htmlspecialchars($filter); ?>">
                <button type="submit">Filter</button>
            </div>
        </form>
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Number</th>
                    <th>Email</th>
                    <th>Location</th>
                    <th>State</th>
                </tr>
            </thead>
            <tbody>
                <?php while ($row = $result->fetch_assoc()) { ?>
                    <tr>
                        <td><?php echo htmlspecialchars($row['name']); ?></td>
                        <td><?php echo htmlspecialchars($row['number']); ?></td>
                        <td><?php echo htmlspecialchars($row['email']); ?></td>
                        <td><?php echo htmlspecialchars($row['location']); ?></td>
                        <td><?php echo htmlspecialchars($row['state']); ?></td>
                    </tr>
                <?php } ?>
            </tbody>
        </table>
        <a href="logout.php">Logout</a>
    </div>
</body>
</html>

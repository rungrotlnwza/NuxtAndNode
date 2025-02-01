<template>
  <div>
    <navbar></navbar>
    <div class="dashboard-container">
      <!-- Sidebar -->
      <div class="sidebar">
        <img src="/image/dev.jpg" alt="Profile Picture" />
        <!-- <img src="https://via.placeholder.com/100" alt="Profile Picture" /> -->
        <h2 class="sidebar-title">Dashboard</h2>
        <ul class="sidebar-menu">
          <li><a href="#" class="active">Dashboard</a></li>
          <li><a href="#">Users</a></li>
          <li><a href="#">Products</a></li>
          <li><a href="#">Settings</a></li>
          <li><a href="#">My Account</a></li>
        </ul>
      </div>

      <!-- Main Content -->
      <div class="main-content">
        <!-- Header -->
        <div class="account-header">
          <h1>My Account</h1>
          <p>จัดการข้อมูลบัญชีของคุณ</p>
        </div>

        <!-- Admin Account -->
        <div class="account-info">
          <h2>ข้อมูลส่วนตัว</h2>
          <div class="account-card">
            <h3>ข้อมูลบัญชี Admin</h3>
            <p><strong>ชื่อ:</strong> cvf</p>
            <p><strong>อีเมล:</strong> cvf@example.com</p>
            <p><strong>บทบาท:</strong> Admin</p>
            <p><strong>วันที่สมัคร:</strong> 10 ตุลาคม 2023</p>
            <p>
              <strong>สถานะ:</strong> <span style="color: green">Active</span>
            </p>
          </div>
        </div>

        <!-- Skills Section -->
        <!-- <div class="account-info">
          <h2>ทักษะ (Skills)</h2>
          <div class="account-card">
            <div class="skills-list">
              <span class="skill-badge">HTML</span>
              <span class="skill-badge">CSS</span>
              <span class="skill-badge">JavaScript</span>
              <span class="skill-badge">Bootstrap</span>
              <span class="skill-badge">React</span>
              <span class="skill-badge">Node.js</span>
            </div>
          </div>
        </div> -->

        <!-- Logout Button -->
        <button class="btn-logout">Logout</button>
      </div>
    </div>
  </div>
</template>
<style scoped>
/* body {
  margin: 0;
  font-family: Arial, sans-serif;
  background-color: #f8f9fa;
} */

.dashboard-container {
  display: flex;
}

.sidebar {
  width: 250px;
  background-color: #343a40;
  color: #fff;
  height: 100vh;
  padding: 20px;
  text-align: center;
}

.sidebar img {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin-bottom: 20px;
  border: 3px solid #fff;
}

.sidebar-title {
  font-size: 24px;
  margin-bottom: 20px;
}

.sidebar-menu {
  list-style: none;
  padding: 0;
}

.sidebar-menu li {
  margin: 15px 0;
}

.sidebar-menu a {
  color: #fff;
  text-decoration: none;
  font-size: 18px;
}

.sidebar-menu a.active {
  font-weight: bold;
}

.main-content {
  flex: 1;
  padding: 20px;
}

.account-header {
  margin-bottom: 30px;
}

.account-header h1 {
  font-size: 28px;
  margin-bottom: 10px;
}

.account-header p {
  font-size: 16px;
  color: #666;
}

.account-info {
  margin-bottom: 30px;
}

.account-info h2 {
  font-size: 24px;
  margin-bottom: 20px;
  color: #333;
}

.account-card {
  background-color: #fff;
  border-radius: 10px;
  padding: 20px;
  margin-bottom: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.account-card h3 {
  font-size: 20px;
  margin-bottom: 15px;
  color: #333;
}

.account-card p {
  font-size: 16px;
  margin-bottom: 10px;
  color: #555;
}

.account-card p strong {
  color: #333;
}

.skills-list {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.skill-badge {
  background-color: #007bff;
  color: #fff;
  padding: 5px 10px;
  border-radius: 5px;
  font-size: 14px;
}

.btn-logout {
  display: block;
  width: 100%;
  max-width: 200px;
  margin: 20px auto 0;
  padding: 10px;
  font-size: 16px;
  background-color: #dc3545;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.btn-logout:hover {
  background-color: #c82333;
}
</style>

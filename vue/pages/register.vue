<template>
  <div>
    <navbar></navbar>
    <form class="container-fluid row vh-90 justify-content-center">
      <div
        class="text-pink col-4 d-none d-sm-flex flex-column justify-content-center align-items-center d-none"
      >
        <h1 class="">Welcome</h1>
        <p>login to continue</p>
      </div>
      <div class="col-12 col-sm-4 d-flex flex-column justify-content-center">
        <h2 class="d-blox d-sm-none">login</h2>
        <div class="mb-3">
          <!-- <label for="">Username</label> -->
          <input
            type="text"
            class="form-control text-pink"
            placeholder="Name"
          />
        </div>
        <div class="mb-3">
          <!-- <label for="">Username</label> -->
          <input
            type="text"
            class="form-control text-pink"
            placeholder="Username"
          />
        </div>
        <div class="mb-3">
          <!-- <label for="">Password</label> -->
          <input
            type="text"
            class="form-control text-pink"
            placeholder="password"
          />
        </div>
        <div class="mb-3">
          <p class="text-pink">
            i have an accout
            <a class="text-decoration-none" href="">Login now</a>
          </p>
        </div>
        <div class="mb-3 text-center">
          <button class="btn btn-pink btn-width-100" type="submit">
            Register
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

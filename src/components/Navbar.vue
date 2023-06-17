<template>
  <nav>
    <div>
      <router-link to="/"><img src="../assets/img/logo.png" alt="Logo" /></router-link>
    </div>
    <div class="menus">
      <router-link to="/">Home</router-link>
      <router-link to="/empresa">Empresa</router-link>
      <router-link to="/galeria">Galeria</router-link>
      <router-link to="/contatos">Contatos</router-link>
    </div>

    
    <div class="menu-icon" :class="{ 'open': isMenuOpen }" @click="toggleMenu">
      <div class="menu-line"></div>
      <div class="menu-line"></div>
      <div class="menu-line"></div>
    </div>
    <div class="menu-overlay" :class="{ 'show': isMenuOpen }" @click="closeMenu">
      <div class="menu-options">
        <router-link to="/" @click="closeMenu">Home</router-link>
        <router-link to="/empresa" @click="closeMenu">Empresa</router-link>
        <router-link to="/galeria" @click="closeMenu">Galeria</router-link>
        <router-link to="/contatos" @click="closeMenu">Contatos</router-link>
      </div>
    </div>
  </nav>


</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      isMenuOpen: false
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
    closeMenu() {
      this.isMenuOpen = false;
    }
  }
};
</script>

<style scoped>
img {
  max-width: 100px;
}

nav {
  position: inherit;
  background-color: #0c2a46;
  padding: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

nav a {
  position: relative;
  font-weight: bold;
  text-decoration: none;
  margin: 0 20px;
  color: #ffffff;
  transition: color 0.3s;
}

.menus a:hover {
  color: #ff5500;
}

.menus a::before {
  content: "";
  position: absolute;
  bottom: -3px;
  left: 0;
  width: 100%;
  height: 3px;
  background-color: #ff5500;
  transform: scaleX(0);
  transition: transform 0.3s;
}

.menus a:hover::before {
  transform: scaleX(1);
}

.menu-icon {
  display: none;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 20px;
  cursor: pointer;
  position: relative;
  z-index: 1;
  margin-right: 20px;
}

.menu-line {
  width: 100%;
  height: 2px;
  background-color: #ffffff;
  margin-bottom: 5px;
  transition: background-color 0.3s ease-in-out;
}

.menu-icon.open .menu-line {
  background-color: #6b655d;
}

.menu-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 110%;
  background-color: #0c2a46;
  display: none;
  z-index: 1;
  transition: transform 0.3s ease-in-out;
  scroll-behavior: smooth;
}

.menu-overlay.show {
  display: block;
  transform: translateX(0%);
}

.menu-options {
  height: 55%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px;
}

.menu-options a {
  display: block;
  padding: 10px;
  text-decoration: none;
  color: #ffffff;
  font-weight: bold;
  font-size: 1.5rem;
}

@media screen and (max-width: 768px) {
  .menus {
    display: none;
  }

  .menu-icon{
    display: flex;
  }
}
</style>
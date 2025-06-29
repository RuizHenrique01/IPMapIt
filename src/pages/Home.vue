<script setup>
import { ref, onMounted } from 'vue';
import InputText from 'primevue/inputtext';
import InputGroup from 'primevue/inputgroup';
import Message from 'primevue/message';
import Button from 'primevue/button';
import * as L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import axios from 'axios';

const initialMap = ref(null);
const userLocation = ref({ lat: null, lng: null });
const locationError = ref(null);
const ipAddress = ref('');
const errorFlag = ref(false);

const getCurrentLocation = () => {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                userLocation.value = {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude
                };
                // Update map to user location
                if (initialMap.value) {
                    initialMap.value.setView([userLocation.value.lat, userLocation.value.lng], 13);
                    L.marker([userLocation.value.lat, userLocation.value.lng])
                        .addTo(initialMap.value)
                        .bindPopup('Você está aqui!')
                        .openPopup();
                }
            },
            (error) => {
                locationError.value = error.message;
                console.error('Geolocation error:', error);
            }
        );
    } else {
        locationError.value = 'Geolocation is not supported by this browser.';
    }
};

const getIpLocation = () => {
    axios.get(`https://ipapi.co/${ipAddress.value}/json/`)
        .then(response => {
            errorFlag.value = false;
            const { latitude, longitude } = response.data;
            userLocation.value = { lat: latitude, lng: longitude };
            if (initialMap.value) {
                initialMap.value.setView([latitude, longitude], 13);
                L.marker([latitude, longitude])
                    .addTo(initialMap.value)
                    .bindPopup('Localização por IP')
                    .openPopup();
            }
        })
        .catch(error => {
            console.error('Error fetching IP location:', error);
            errorFlag.value = true;
        });
};

onMounted(()=> {
    initialMap.value = L.map('map').setView([51.505, -0.09], 13);
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19, 
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(initialMap.value);
    getCurrentLocation();
});

</script>
<template>
    <header class="home-header">
        <h1>IP Map It!</h1>
    </header>
    <main class="home-content">
        <InputGroup>
            <InputText type="text" v-model="ipAddress" class="flex-3" />
            <Button label="Search" class="flex-1" @click="getIpLocation()" />
        </InputGroup>
        <Message v-if="errorFlag" severity="error" icon="pi pi-times-circle" class="mb-2 self-start">Não foi possível encontrar a localização.</Message>
        <div id="map"></div>
    </main>
</template>

<style scoped>
.home-header {
    width: 100%;
    height: 12vh;
    background-color: var(--primary-app-color);
    display: flex;
    justify-content: center;
}

.home-header h1 {
    font-size: 3rem;
    color: white;
}

.home-content {
    width: 60%;
    margin: 0px auto;
    padding-top: 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 24px;
}

#map { 
    width: 100%;
    height:500px;
}
</style>
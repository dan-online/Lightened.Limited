<template>
    <b-container>
        <grid-layout
            :layout="(experiences.version ? experiences.layout : [])"
            :col-num="12"
            :row-height="30"
            :is-draggable="true"
            :is-resizable="true"
            :is-mirrored="false"
            :vertical-compact="true"
            :margin="[10, 10]"
            :use-css-transforms="true"
        >
            <grid-item 
                v-for="tile in experiences.tiles" 
                :key="tile.cords.i" 
                :x="tile.cords.x" 
                :y="tile.cords.y"
                :w="tile.cords.w"
                :h="tile.cords.h"
                :i="tile.cords.i"
              
            >
                <metro-tile
                    :frontStyle="{'background-color': 'blue'}"
                    :backStyle="{'background-color': 'red'}"
                    :rotateX="tile.rotateX"
                    @mouseover.native="tileOver(tile)"
                    @mouseleave.native="resetTile(tile)"
                    >
                    <div slot="front">
                        front
                    </div>
                    <div slot="back">
                        back
                    </div>
                    <div slot="top">
                        top
                    </div>
                    <div slot="bottom">
                        bottom
                    </div>
                </metro-tile>
            </grid-item>
        </grid-layout>
    </b-container>
</template>

<script>

const Experiences = () => import("../../Experiences")
import VueGridLayout from 'vue-grid-layout';
import MetroTile from 'vue-metro-tile';


export default {
    data() {
        return {
            experiences: localStorage.LightenedExperiences
            ? JSON.parse(localStorage.LightenedExperiences)
            : {}
        }
    },
    mounted() {
        Experiences().then((data) => {
            data = data.default; 
            if(this.experiences.version && this.experiences.version === data.version) {
                return; 
            }
            if(process.env.NODE_ENV === "production") {
                localStorage.LightenedExperiences = JSON.stringify(data)
            }
            else {
                delete localStorage.LightenedExperiences; 
            }
            this.experiences = data; 
        })
    },
    components: {
        GridLayout: VueGridLayout.GridLayout,
        GridItem: VueGridLayout.GridItem,
        MetroTile 
    },
    methods: {
        tileOver(tile) {
            tile.rotateX = 90
        },
        resetTile(tile) {
            tile.rotateX = 0
        }
    }
}
</script>
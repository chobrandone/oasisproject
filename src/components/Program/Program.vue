<template >
   <div class="our-info-area pt-70 pb-40">
        <div class="container ">
            <div class="row ">
                <div class="col-lg-4 col-md-6 col-sm-6 pb-40 ">
                    <div class="single-info mb-30">
                        <div class="info-icon">
                            <span class="flaticon-support"></span>
                        </div>
                        <div class="info-caption">
                            <p>Call Us Anytime</p>
                            <span>+ (123) 1800-567-8990</span>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 col-sm-6 pb-40">
                    <div class="single-info mb-30">
                        <div class="info-icon">
                            <span class="flaticon-clock"></span>
                        </div>
                        <div class="info-caption">
                            <p>Sunday CLOSED</p>
                            <span>Mon - Sat 8.00 - 18.00</span>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 col-sm-6">
                    <div class="single-info mb-30">
                        <div class="info-icon">
                            <span class="flaticon-place"></span>
                        </div>
                        <div class="info-caption">
                            <p>Columbia, SC 29201</p>
                            <span>USA, New York - 10620</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:"Program",
    data() {
        return {
            
        }
    },
}
</script>
<style scoped>
.container{
    margin-top: 20px;
   
}
.row{
   padding-top: 60px;
}
.our-info-area {
    background: #f9f9f9
}
    .pb-40 {
    padding-bottom: 40px;
}

.our-info-area .single-info {
    display: flex;
    align-items: center
}

.our-info-area .single-info .info-icon span {
    color: #EDC750;
    font-size: 44px;
    margin-bottom: 0;
    display: block
}

.our-info-area .single-info .info-caption {
    padding-left: 20px
}

.our-info-area .single-info .info-caption p {
    color: #677294;
    font-size: 16px;
    font-weight: 400;
    margin-bottom: 0
}

.our-info-area .single-info .info-caption span {
    color: #2c234d;
    font-size: 20px;
    margin-bottom: 0px;
    display: block;
    font-weight: 600
}

@media only screen and (min-width: 576px) and (max-width: 767px) {
    .our-info-area .single-info .info-caption span {
        font-size: 16px
    }

}

    
</style>
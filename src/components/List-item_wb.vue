<template>
    <!--进单条的，查看评论查的-->
    <li>
        <a>
            <div class="user">
                <img class="ava">
                <div>
                    <div class="name"></div>
                    <div class="source">
                        <span class="date"></span>
                        <span class="device"></span>
                    </div>
                </div>
            </div>
        </a>
    </li>

</template>

<script>

    export default{
        data(){

        },
        name:'List-item_wb',
        props:{item}
    }


</script>
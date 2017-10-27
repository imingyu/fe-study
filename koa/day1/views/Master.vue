<!DOCTYPE html>
<template>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title><slot name="title"></slot></title>
    <slot name="meta"></slot>
</head>
<body>
    <slot name="top"></slot>
    <slot></slot>
    <script src="https://cdn.bootcss.com/jquery/3.2.1/jquery.min.js"></script>
    <script src="https://cdn.bootcss.com/vue/2.4.4/vue.min.js"></script>
    <slot name="bottom"></slot>
</body>
</html>
</template>

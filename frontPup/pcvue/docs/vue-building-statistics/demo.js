define([
  'require',
  'vue',
  'vueBuildingStatistics'
], function (require, Vue, $) {
  'use strict';
  // 创建根实例
  new Vue({
    el: '#example',
    data: {
      istest: false,
      dHouseholds: 20,
      households: 30,
      inPersons: 40,
      rentalNum: 50,
      vacantNum: 60,
      peopleSymbol: {
        CCPNum: 5,
        zdfuNum: 1,
        under14Num: 3,
        crimeIlegalNum: 2,
        breakNum: 3,
        zdgkNum: 4,
        xmsfNum: 0,
        sqjzNum: 0,
        jsbNum: 0,
        xdryNum: 0,
        azbNum: 1,
        zdsfNum: 0,
        zdqsnNum: 0,
        xjryNum: 3,
        nclsetNum: 0,
        kclrNum: 1,
        tkryNum: 0,
        lsjzNum: 0,
        cjrNum: 0,
        dbryNum: 0
      },
    },
    methods: {},
  })
});
"use strict";(self.webpackChunkunittestbot_web=self.webpackChunkunittestbot_web||[]).push([[4492],{18671:function(e,t,n){n.r(t),n.d(t,{_frontmatter:function(){return l},default:function(){return d}});var s=n(87462),i=n(63366),o=(n(15007),n(64983)),a=n(23017),r=(n(8156),["components"]),l={};void 0!==l&&l&&l===Object(l)&&Object.isExtensible(l)&&!Object.prototype.hasOwnProperty.call(l,"__filemeta")&&Object.defineProperty(l,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"src/docs/advanced/stubs-inside.md"}});var u={_frontmatter:l},c=a.Z;function d(e){var t=e.components,n=(0,i.Z)(e,r);return(0,o.kt)(c,(0,s.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The paradigm of unit testing is to verify correctness of code units in isolation. There may be many opinions on what is\na unit: a function, a file, a class or even a library; UTBot defines a unit as the smallest project target that contains\nselected code. For example, if it code from file1.c is tested (see Figure 5), then helper.bc\n(rather then exe1.bc) will be selected as its unit. When tests for unit are generated, there may be an interest to test\nthem with respect that when functions from another unit are called, their complete testing is unwanted. It is a common\npractice to use stubs for such functions — functions with same signatures, that execute simplified behaviour, which\nallows testing process to focus on a selected unit."),(0,o.kt)("p",null,"To support this intention, UTBot offers a possibility to use symbolic stubs — stubs, which, when called, return a\nsymbolic value. Functions from units other than the tested one can be replaced with such stubs, and selected unit will\nbe tested, regarding that other units’ functions may return any value."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-c++"},'int process_temperature() {\n    int t = read_t_sensor();\n    if (t < 0) {\n        printf("Negative");\n        return -1;\n    }\n    if (t < 30) {\n        printf("Comfortable");\n        return 0;\n    }\n    printf("Too hot");\n    return 1;\n}\n')),(0,o.kt)("p",null,"An example of using stubs. Consider a function above. If one wants to test various execution paths of\nprocess_temperature()\nfunction, their may not be interested in testing read_t_sensor()\nthat can address real physical device and require complex environment to setup."),(0,o.kt)("p",null,"Stub file description. Code example bellow presents UTBot stub file example. Its contents are not totally intuitive, because the\nsame stub files are used for generating tests (translate to LLVM bitcode and interpret by KLEE) and running them. When\nstubs are compiled to be passed to KLEE, KLEE_MODE=1 is assigned during compilation, so calling a stub from tested unit\nfor the first time would create a symbolic variable, and then this variable will be returned for every function call."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-c++"},'//automatically generated\nchar read_t_sensor_symbolic;\nchar read_t_sensor() {\nstatic int firstTimeCall = 1;\n#ifdef\nKLEE_MODE\nif (firstTimeCall == 1) {\nfirstTimeCall = 0;\nklee_make_symbolic(\n&read_t_sensor_symbolic,\nsizeof(read_t_sensor_symbolic),\n"read_t_sensor_symbolic");\n}\n//can be manually added\nklee_prefer_cex(read_t_sensor_symbolic == 0);\nklee_assume(read_t_sensor_symbolic > -273);\n#endif\n//automatically generated\nreturn read_t_sensor_symbolic;\n}\n')),(0,o.kt)("p",null,"UTBot is capable of generating only simple stubs, which do not depend on their arguments, but it affords its users a\ngreat opportunity to modify stubs themselves, using a powerful ",(0,o.kt)("a",{parentName:"p",href:"https://klee.github.io/docs/intrinsics/"},"KLEE API"),". This can be really helpful to add\nconstraints to program arguments and return value, making it look like a real function, but with the advantage of much\nfaster symbolic execution. Consider read_t_sensor(), which, in reality, should never return values below absolute zero.\nIf a function like read_t_sensor() needs to be stubbed, users can add a constraint to it, which will discard all the\nunwanted paths and make stub behavior closer to real function behavior. Moreover, users can apply a soft constraint to\nthe read_t_sensor() result to force the testing of a path where read_t_sensor() returns 0."),(0,o.kt)("p",null,"For each stub, a header is generated which contains symbols from user source file, needed for function signature\nsuccessful compilation. This includes structures, classes and type definitions."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Stubs linking behaviour for c-example project",src:"https://github.com/UnitTestBot/unittestbot.github.io/raw/source/resources/images/stubsExample.png"})),(0,o.kt)("p",null,"Generating tests with symbolic stubs. When UTBot generates tests, it provides an option to replace all project targets\nexcept the tested one with stubs. Prior to tests generation, UTBot creates a stub file for every source file in the\nproject. When the generation request specifies to use stubs, UTBot links all project targets except one not from source\nfiles, but from stub files. UTBot uses exactly the same commands for stubs compilation and linkage, as it would use for\nsource files. For example, when tests generation for helper.a with stubs is requested in c-example project, targets will\nbe replaced to stubs according to figure above."),(0,o.kt)("p",null,'Running tests with symbolic stubs. Apart from generated tests, UTBot also generates Makefiles(Section 3.9) to run them.\nThis Makefiles contains commands to build each test with or without stubs, and commands to run built test with/without\nstubs. When a test for function is generated using stubs, the test binary is linked with stub code. This time,\nKLEE_MODE=0 is passed and stub function simply returns a global variable, which is set in test body. For more\ninformation on running UTBot tests, see "Generating and running tests" (Section 3.7).'))}d&&d===Object(d)&&Object.isExtensible(d)&&!Object.prototype.hasOwnProperty.call(d,"__filemeta")&&Object.defineProperty(d,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"src/docs/advanced/stubs-inside.md"}}),d.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-docs-advanced-stubs-inside-md-ff644e22399432d6ccf7.js.map
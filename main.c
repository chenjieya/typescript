#include <stdio.h>
#include <string.h>
// 首页展示内容
char* welcomeInfo[6] = { "*********************************************************\n",
"*		祖国加油,祈祷早日战胜病毒!		*\n",
"*		-欢迎登陆疫情防控信息管理系统-		*\n",
"*		请按照系统提示指令完成相应操作！	*\n",
"*********************************************************\n",
"\n"
 };
// 菜单展示的内容
 char* menuInfo[7] = {
"*********************系统功能菜单************************\n",
"	| 1.信息录入         2.信息新增|\n",
"	| 3.信息删除         4.信息修改|\n",
"	| 5.信息查询         6.信息展示|\n",
"	| 7.信息读取         8.重写保存|\n",
"	| 9.恢复备份        10.数据备份|\n",
"	|11.系统退出                   |\n",
};

struct{
  char no[1024];
  char id[1024];
  char name[1024];
  char sex[1024];
  int age;
  char phone[1024];
  char health[1024];
  float temperature;
} peopleInfo[100];

int count;  // 用于统计用户的数量


// 声明函数
void homePage();
void menu();
void handleMenu(int num);
void addPeopleInfo(); 
void refreshPeopleList();
void editPeopleInfo();
void deletePropleInfo();
int searchPeopleInfo();
void showPeopleInfo();
int checkRepeat();


// 初始化函数
int main(){
  homePage(); // 渲染首页
  menu(); // 渲染菜单
  return 0;
}

// 系统首页
void homePage() {
  for(int i = 0; i < 6; i++) {
    printf("%s", welcomeInfo[i]);  // 循环打印数组，渲染首页内容
  }
}

// 系统菜单
void menu() {
  int num;
  for(int i = 0; i < 7; i++) {
    printf("%s", menuInfo[i]);  // 循环渲染数组，渲染菜单内容
    printf("	-------------------------------\n");
  }
  scanf("%d", &num);  // 用户输入操作序号后，执行handlemenu方法。如果输入序号不存在，则进入switch里面的defautl默认方法，再次让用户重新输入
  handleMenu(num); // 根据用户输入的序号，执行对应操作
}

// 菜单对应功能操作
void handleMenu(int num) {
  switch(num) {
    // 信息录入
    case 1:
      printf("录入人员信息:");
      addPeopleInfo(); // 新增用户方法
      break;
    case 2:
      printf("新增人员信息:"); 
      addPeopleInfo(); // 新增用户方法
      break;
    case 3:
      printf("删除人员信息:");
      deletePropleInfo(); // 删除方法
      break;
    case 4:
      printf("修改人员信息:");
      editPeopleInfo(); // 修改方法
      break;
    case 5:
      printf("查询人员信息:");
      searchPeopleInfo(); // 查询方法
      menu();
      break;
    case 6:
      printf("展示人员信息:");
      showPeopleInfo(); // 展示所有用户方法
      break;
    case 7:
      printf("读取人员信息开发中...");
      menu();
      break;
    case 8:
      printf("重写保存开发中...");
      menu();
      break;
    case 9:
      printf("恢复备份开发中...");
      menu();
      break;
    case 10:
      printf("数据备份开发中...");
      menu();
      break;
    case 11:
      // 退出系统登录
      break;
    default:
      printf("请输入对应功能序号：\n");  
      scanf("%d", &num);  // 进入default说明用户输入的序号不对，则让用户重新输入
      handleMenu(num);
  }
};

// 刷新人员列表
void refreshPeopleList() {
 
}

// 增加人员信息（count变量用于记录用户的个数，对应用户列表的索引，用户列表数据格式[{no:1, name: 'zhaoyunfei'}， ....]）
void addPeopleInfo() {
  char id[1024];
	printf("请录入个人的信息：\n");
	printf("编号：\n");
  scanf("%s", peopleInfo[count].no);
	printf("身份证号码：\n");
	scanf("%s",id);
  int flag = checkRepeat(id);  // 身份证号是否重复进行校验
  if(flag == 1) {  // 通过校验赋值
    strcpy(peopleInfo[count].id,id);
  } else{  // 没通过校验，终止函数，直接返回到菜单页面
    menu();
  }
	printf("姓名：\n");
	scanf("%s",peopleInfo[count].name);
	printf("性别：\n");
	scanf("%s",peopleInfo[count].sex);
	printf("年龄：\n");
	scanf("%d",&peopleInfo[count].age);
	printf("电话号码：\n");
	scanf("%s",peopleInfo[count].phone);
	printf("健康情况：\n");
	scanf("%s",peopleInfo[count].health);
	printf("体温：\n");
	scanf("%f",&peopleInfo[count].temperature);	
	printf("信息新增成功！\n");
  count++;
  menu();
}

// 校验
int checkRepeat(char val[]) {
  for(int i = 0; i < 100; i++) {
   if( strcmp(peopleInfo[i].id, val) == 0 ) {
    printf("新增失败，身份证号重复\n");
    return 2;
   }
  }
  return 1;
}

// 编辑人员信息
void editPeopleInfo() {
  int type;
  int n = searchPeopleInfo();  // 先查一下人是否存在，并打印出信息，返回值是查到用户的索引
  printf("0修改名字, 1修改年龄, 2修改手机号, 3修改健康状态, 4修改体温\n");
  scanf("%d", &type);
  printf("请输入修改后的内容:\n");

  switch(type){
    case 0:
      scanf("%s", peopleInfo[n].name);
      break;
    case 1:
      scanf("%d", &peopleInfo[n].age);
      break;
    case 2:
      scanf("%s", peopleInfo[n].phone);
      break;
    case 3:
      scanf("%s", peopleInfo[n].health);
      break;
    case 4:
      scanf("%f", &peopleInfo[n].temperature);
      break;
  }
  menu();
}

// 删除人员信息
void deletePropleInfo() {
  char id[1024];
  int flag=0;
  printf("请输入删除人员的身份证号:");
  scanf("%s", id);
  for(int i=0; i<count; i++) {
    if(strcmp(peopleInfo[i].id, id) == 0) {
      flag = 1;
      for(int j = i; j < count - 1; j++) {
        peopleInfo[i] = peopleInfo[j+1]; 
      }
      count--;
    }
  }
  if(flag == 0) {
    printf("要删除的人员信息不存在\n");
  } else{
    printf("删除成功\n");
  }
  menu();
}

// 查询人员信息
int searchPeopleInfo() {
  char id[1024];
  int n, flag=0;  // flag变量用于判断查询用户是否存在，存在1，不存在0
  printf("请输入身份证号:");
  scanf("%s", id);
  for(int i = 0; i < count; i++) {
    if(strcmp(peopleInfo[i].id, id) == 0) {
      printf("编号：%s;\n身份证号:%s;\n姓名:%s;\n性别:%s;\n年龄:%d;\n手机号码:%s;\n健康状态:%s;\n体温:%f;\n", peopleInfo[i].no, peopleInfo[i].id,peopleInfo[i].name, peopleInfo[i].sex, peopleInfo[i].age,peopleInfo[i].phone, peopleInfo[i].health, peopleInfo[i].temperature);
      n = i;
      flag = 1;  // 用户存在，flage变成1
      break; // 查到人员信息之后，结束循环
    }
  }

  // if判断也可以 （如果查询的人员不存在（flag:0），让用户选择是否重新查询）
  while(flag == 0){
    int a;
    printf("查询人员不存在，按1重新查询，其他则退出查询");
    scanf("%d", &a);
    if(a == 1) {
      searchPeopleInfo();  // 用户输入1，则重新查询用户
    }
    flag = 1;  // 结束当前函数的while循环（不论用户输入什么，都将flag变成1,结束当前函数的while循环。因为，用户输入1，则将重新执行searchPeopleInfo方法，需要结束当前while循环，如果用户输入其他的内容，则代表用户不想继续查询，也需要结束当前循环，所以，无论输入什么，都需要结束循环）；
  }
  // menu();
  return n;  // n是查到用户时候，用户所对应的索引，也就是用户所在的位置（用于编辑用户时候，编辑用户的时候，先查到该用户，然后对该位置n的用户信息进行编辑）
}

// 展示人员信息
void showPeopleInfo() {
  // 循环所有人员信息，进行打印
  for(int i = 0; i < count; i++) {
    printf("\n编号：%s;\n身份证号:%s;\n姓名:%s;\n性别:%s;\n年龄:%d;\n手机号码:%s;\n健康状态:%s;\n体温:%f;\n", peopleInfo[i].no, peopleInfo[i].id,peopleInfo[i].name, peopleInfo[i].sex, peopleInfo[i].age,peopleInfo[i].phone, peopleInfo[i].health, peopleInfo[i].temperature);
    printf("------------------------------\n");
  }
  menu();
}


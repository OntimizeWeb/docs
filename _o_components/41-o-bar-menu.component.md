---
permalink: /components/o-bar-menu.component/
title: "Bar menu"
comp: barMenu
---


{% assign filenameArray = "" | split:"|"  %} 
{% for files_hash in site.data.components.barMenuData %}
  {% assign filenameArray = filenameArray | push: files_hash[0] %}
{% endfor %}
{% assign filenameArray = filenameArray | sort %}


{% for filename in filenameArray %}

  {% assign dataFile = site.data.components.barMenuData[filename] %}
  {% capture dataFileCapture %}
    {% include o-component-single.html compFile=dataFile %}
  {% endcapture %}
  <div class="o-compFile-div">
    <h2 class="">{{ dataFile.title }}</h2>
    {{ dataFileCapture | replace: '    ', '' }}
  </div>
{% endfor %}

Menu item actions priority order:

1. Navigation
2. Action invocation


<h3 class="grey-color">Example</h3>

```html
<o-bar-menu title="APP_TITLE">
  <o-bar-menu-group title="OPTIONS">
    <o-bar-menu-item title="SETTINGS" icon="settings" route="/settings">
    </o-bar-menu-item>
    
    <o-bar-menu-group title="LANGUAGE">
      <o-bar-menu-item title="English"></o-bar-menu-item>
      <o-bar-menu-item title="Español"></o-bar-menu-item>
    </o-bar-menu-group>
    
    <o-bar-menu-separator></o-bar-menu-separator>
    
    <o-bar-menu-item title="LOGOUT" icon="power_settings_new" 
      route="/login" confirm="MESSAGES.CONFIRM_LOGOUT">
    </o-bar-menu-item>
  </o-bar-menu-group>
  
  <o-bar-menu-group title="VIEW">
    <o-bar-menu-item title="HOME" icon="home" 
      route="/home">
    </o-bar-menu-item>
    
    <o-bar-menu-item title="CUSTOMERS" icon="people" 
      route="/main/customers">
    </o-bar-menu-item>
    
    <o-bar-menu-item title="ACCOUNTS" icon="credit_card" 
      route="/main/accounts">
    </o-bar-menu-item>
    
    <o-bar-menu-item title="TRANSACTIONS" icon="swap_horiz" 
      route="/main/transactions">
    </o-bar-menu-item>
    
    <o-bar-menu-item title="BRANCHES" icon="account_balance" 
      route="/main/branches">
    </o-bar-menu-item>
    
    <o-bar-menu-item title="CASH_DISPENSERS" icon="attach_money" 
      route="/main/cash-dispensers">
    </o-bar-menu-item>
    
    <o-bar-menu-item title="EMPLOYEES" icon="airline_seat_recline_normal" 
      route="/main/employees">
    </o-bar-menu-item>
  </o-bar-menu-group>
  
  <o-bar-menu-group title="HELP">
    <o-bar-menu-item title="ABOUT" icon="info" route="/about">
    </o-bar-menu-item>
    
    <o-bar-menu-item title="HELP" icon="help" route="/help">
    </o-bar-menu-item>
  </o-bar-menu-group>
  
  <o-bar-menu-item title="VERSION" [action]="showVersionCallback"></o-bar-menu-item>
</o-bar-menu>
```
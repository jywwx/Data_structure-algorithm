 -- SELECT * FROM `demeter_order` o JOIN `demeter_order_item` oi ON o.`order_no` = oi.`order_no` WHERE o.`county_name` = "茶陵县" and o.`statement_date` = "2024-01-25" and o.`status` != 'CANCEL'

 SELECT o.`customer_store_id`, o.`customer_store_name`,sum(if(oi.`goods_name` IS NOT NULL,1,0)) 是否下单, SUM(IF(oi.`back_category_id` IN (454,455,456,494,526,450,451),1,0)) 是否包含蛋奶 FROM `demeter_order` o LEFT JOIN `demeter_order_item` oi on o.`id`=oi.order_id WHERE 
 o.`statement_date` = "2024-03-14" and o.`status` !='CANCEL' and o.`county_name` = "茶陵县"  group by o.`customer_store_id` ORDER BY `customer_store_id`; 

SELECT * FROM `demeter_order` o JOIN `demeter_order_item` oi ON o.`order_no` = oi.`order_no` WHERE o.`customer_store_id` in (552862,) and o.`status` != 'CANCEL'

 -- SELECT o.`customer_store_id`,o.`customer_store_name`,sum(if(oi.`goods_name` IS NOT NULL,1,0)) 是否下单, SUM(IF(oi.`back_category_id` IN (454,455,456,494,526,450,451),1,0)) 是否包含蛋奶 FROM `demeter_order` o LEFT JOIN `demeter_order_item` oi on o.`id`=oi.order_id WHERE 
 -- o.`statement_date`= "2023-11-17" and o.`status` !='CANCEL' and o.`customer_store_id` IN (355080) group by o.`customer_store_id` ORDER BY `customer_store_id`; 



 SELECT id, create_time, store_remark,goods_id,`store_id` , liability_coupon_amount  FROM `ass_after_sale_order` WHERE `store_id` = 262967 ORDER BY `create_time` DESC;


SELECT * FROM `ass_after_sale_order` WHERE store_id = '279232' ORDER BY `create_time` DESC;

SELECT * FROM `ass_after_sale_order` WHERE store_id = '67848' ;

SELECT * FROM `store_base_info` WHERE `store_id` in (377855) ORDER BY `store_id` DESC 



SELECT `store_id`, MAX( `create_time`)  , `staff_name` , GROUP_CONCAT( `option_name`) , GROUP_CONCAT( `option_values`) , GROUP_CONCAT( `remark`) FROM crm_policy_task_plan_problem_diagnosis_log WHERE `create_time` >= "2023-11-30 01:00:00" AND `staff_id` in (100208) GROUP BY `store_id`, `task_plan_id` ORDER BY `store_id` DESC 
-- 店铺视角
 -- SELECT `store_id` , `staff_name` , GROUP_CONCAT( `option_name`) , GROUP_CONCAT( `option_values`) , GROUP_CONCAT( `remark`) FROM crm_policy_task_plan_problem_diagnosis_log WHERE `create_time` >= "2023-11-23 01:00:00" store_id IN (35569) GROUP BY `store_id`


 SELECT
  store_id,
  COUNT(IF(`status` = "ALREADY_RECEIVE", 1, null)) as "领取",
  COUNT(*) as "总发送"
FROM
  `tmk_task_issue_coupon`
WHERE
  `create_time` BETWEEN "2023-08-01 19:18:48" AND "2023-12-25 19:18:48"
  AND `status` != "NOT_SHARE"
  AND `store_id` IN (102384)
GROUP BY
  `store_id`



  SELECT
  aa.store_id,
  aa.`staff_id` ,
  aa.`store_name`,
  aa.`county_name`,
  GROUP_CONCAT(DISTINCT (aa.`staff_id`)),
  COUNT(*) as "任务次数",
  COUNT(IF(aa.`store_in_time` IS NOT NULL, 1, null)) as "打卡次数",
  COUNT(if(cc.order_amount >0,1,null)) as "任务下单次数",
  GROUP_CONCAT(if(cc.order_amount >0,cc.`statistics_date`,null)) as "任务下单日期",
  dd.zxd as "总下单次数",
  dd.zsj as "总下单日期",
  ff.`number_of_categories_store` as "门店预估品类数",
  COUNT(IF(aa.`type` = 5, 1, null)) as "必拜访次数",
  COUNT(IF(aa.`type` = 101, 1, null)) as "电话拜访的拜访次数",
  GROUP_CONCAT(bb.option_name),
  GROUP_CONCAT(bb.option_values),
  GROUP_CONCAT(remark)
FROM
  `crm_policy_task_plan` aa
  LEFT JOIN crm_policy_task_plan_problem_diagnosis_log bb on aa.`id` = bb.`task_plan_id`
  LEFT JOIN statistics_order_store_info cc on aa.`store_id` = cc.`store_id`
  and aa.`statement_date` = cc.statistics_date
  LEFT JOIN store_visit_basic_information ff on aa.`store_id` = ff.`store_id`
  AND aa.`statement_date` = cc.`statistics_date`
  and cc.`order_amount` > 0
  LEFT JOIN (
    SELECT
      store_id,
      COUNT(*) as "zxd",
      GROUP_CONCAT(statistics_date) as "zsj"
    FROM
      statistics_order_store_info
    WHERE
      `statistics_date` = "2023-11-23"
      AND `order_amount` > 0
    GROUP BY
      `store_id`
  ) dd on aa.`store_id` = dd.store_id
WHERE
  aa.`statement_date` = "2023-11-23"
  AND aa.`store_id` IN (
    SELECT DISTINCT
      (`store_id`)
    FROM
      crm_policy_task_plan
    WHERE
      `statement_date` = "2023-11-23" 
      AND `store_in_time` IS NOT NULL AND `staff_id`  IN (465715,527157,528250,74747,100208,74728)
  )
  AND dd.zxd > 0
  
GROUP BY
  aa.`store_id`








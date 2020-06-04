# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation


## userテーブル

|Column|Type|Options|
|------|----|-------|
|name|string|null:false|
|email|string|null: false, unique: true|
|encrypted_password|string|null: false|

### Association
- has_many :groups_users
- has_many :group, through: :groups_users
- has_many :message

## groupテーブル
|Column|Type|Options|
|------|----|-------|
|group_name|string|null: false|
|user_id|integer|null: false, foreign_key:true|
|message_id|integer|null: false, foreign_key: true|

### Association
- has_many :groups_users
- has_many :users, through: :groups_users
- has_many :message_groups
- has_many :message, through: :message_groups


## messageテーブル
|Column|Type|Options|
|------|----|-------|
|text|text|null: false|
|image|string||
|group_id|integer|null: false, foreign_key:true|
|user_id|integer|null: false, foreign_key:true|

### Association
- has_many :message_groups
- has_many :group, through: :message_groups
- belongs_to :user

## messages_groupsテーブル
|Column|Type|Options|
|------|----|-------|
|message_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :message


## groups_usersテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...

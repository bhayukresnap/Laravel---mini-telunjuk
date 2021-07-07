<?php

use Illuminate\Database\Seeder;
use App\User;
class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        User::insert([
        	[
        		'role_id'=>2,
                'email'=> 'bhayu_kresnap@yahoo.com',
                'name'=>'Bhayu Kresna P',
                'password'=>bcrypt('Gallardo123'),
        	],
            [
                'role_id'=>1,
                'email'=> 'devin@sekontol.com',
                'name'=>'Devin',
                'password'=>bcrypt('devinsekontol'),
            ]
        ]);
    }
}

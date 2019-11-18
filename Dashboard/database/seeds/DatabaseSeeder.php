<?php

use App\Blog;
use App\Meta;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // factory(Blog::class, 1000)->create();
        // factory(Meta::class, 1000)->create();


        $this->call(UserSeeder::class);
        $this->call(RoleSeeder::class);
    }
}

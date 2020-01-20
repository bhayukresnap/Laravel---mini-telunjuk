@if(count($recents) > 0)
<aside class="ps-widget--sidebar">
  <div class="ps-widget__header">
    <h3>Recent Posts</h3>
  </div>
  <div class="ps-widget__content">
    @foreach($recents as $recent)
    <div class="ps-post--sidebar">
      <div class="ps-post__thumbnail">
        <a href="{{route('main-blogpost',$recent->meta->path_url)}}"></a><img src="{{$recent->thumbnail->original}}" alt="">
      </div>
      <div class="ps-post__content">
        <a class="ps-post__title" href="{{route('main-blogpost',$recent->meta->path_url)}}">{{$recent->title}}</a>
        <span>{{\AppHelper::instance()->blogTime($recent->created_at)}}</span>
      </div>
    </div>
    @endforeach
  </div>
</aside>
@endif

<aside class="ps-widget--sidebar">
  <div class="ps-widget__header">
    <h3>New Products</h3>
  </div>
  <div class="ps-widget__content">
    <div class="ps-shoe--sidebar">
      <div class="ps-shoe__thumbnail"><a href="#"></a><img src="images/shoe/sidebar/1.jpg" alt=""></div>
      <div class="ps-shoe__content"><a class="ps-shoe__title" href="#">Men's Sky</a>
        <p><del> £253.00</del> £152.00</p><a class="ps-btn" href="#">PURCHASE</a>
      </div>
    </div>
    <div class="ps-shoe--sidebar">
      <div class="ps-shoe__thumbnail"><a href="#"></a><img src="images/shoe/sidebar/2.jpg" alt=""></div>
      <div class="ps-shoe__content"><a class="ps-shoe__title" href="#">Nike Flight Bonafide</a>
        <p><del> £253.00</del> £152.00</p><a class="ps-btn" href="#">PURCHASE</a>
      </div>
    </div>
    <div class="ps-shoe--sidebar">
      <div class="ps-shoe__thumbnail"><a href="#"></a><img src="images/shoe/sidebar/3.jpg" alt=""></div>
      <div class="ps-shoe__content"><a class="ps-shoe__title" href="#">Nike Sock Dart QS</a>
        <p><del> £253.00</del> £152.00</p><a class="ps-btn" href="#">PURCHASE</a>
      </div>
    </div>
  </div>
</aside>

@if(count($tags))
<aside class="ps-widget--sidebar">
  <div class="ps-widget__header">
    <h3>Tags</h3>
  </div>
  <div class="ps-widget__content">
    <ul class="ps-tags">
      @foreach($tags as $tag)
      <li><a href="{{route('main-tagpost',$tag->meta->path_url)}}">{{$tag->tagname}}</a></li>
      @endforeach
    </ul>
  </div>
</aside>
@endif
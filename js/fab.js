    // Toggle-on-click behaviour.
    $(document).on('click.fabClickToggle', '.fixed-action-btn.click-to-toggle > a', function (e) {
        var $this = $(this);
        var $menu = $this.parent();
        if ($menu.hasClass('active')) {
          closeFABMenu($menu);
        } else {
          openFABMenu($menu);
        }
      });
  
      // Toolbar transition behaviour.
      $(document).on('click.fabToolbar', '.fixed-action-btn.toolbar > a', function (e) {
        var $this = $(this);
        var $menu = $this.parent();
        FABtoToolbar($menu);
      });
    });
  
    $.fn.extend({
      openFAB: function () {
        openFABMenu($(this));
      },
      closeFAB: function () {
        closeFABMenu($(this));
      },
      openToolbar: function () {
        FABtoToolbar($(this));
      },
      closeToolbar: function () {
        toolbarToFAB($(this));
      }
    });
  
    var openFABMenu = function (btn) {
      var $this = btn;
      if ($this.hasClass('active') === false) {
  
        // Get direction option
        var horizontal = $this.hasClass('horizontal');
        var offsetY, offsetX;
  
        if (horizontal === true) {
          offsetX = 40;
        } else {
          offsetY = 40;
        }
  
        $this.addClass('active');
        $this.find('ul .btn-floating').velocity({ scaleY: ".4", scaleX: ".4", translateY: offsetY + 'px', translateX: offsetX + 'px' }, { duration: 0 });
  
        var time = 0;
        $this.find('ul .btn-floating').reverse().each(function () {
          $(this).velocity({ opacity: "1", scaleX: "1", scaleY: "1", translateY: "0", translateX: '0' }, { duration: 80, delay: time });
          time += 40;
        });
      }
    };
  
    var closeFABMenu = function (btn) {
      var $this = btn;
      // Get direction option
      var horizontal = $this.hasClass('horizontal');
      var offsetY, offsetX;
  
      if (horizontal === true) {
        offsetX = 40;
      } else {
        offsetY = 40;
      }
  
      $this.removeClass('active');
      var time = 0;
      $this.find('ul .btn-floating').velocity("stop", true);
      $this.find('ul .btn-floating').velocity({ opacity: "0", scaleX: ".4", scaleY: ".4", translateY: offsetY + 'px', translateX: offsetX + 'px' }, { duration: 80 });
    };
  
<?php

/**
 * GMat Custom Quiz
 *
 * @package     GMatCustomQuiz
 * @author      Henri Susanto
 * @copyright   2019 Henri Susanto
 * @license     GPL-2.0-or-later
 *
 * @wordpress-plugin
 * Plugin Name: GMat Custom Quiz
 * Plugin URI:  https://github.com/susantohenri/gmat-custom-quiz
 * Description: This plugin display custom LearnDash quiz for gmat.expert
 * Version:     1.0.0
 * Author:      Henri Susanto
 * Author URI:  https://github.com/susantohenri
 * Text Domain: gmat-custom-quiz
 * License:     GPL v2 or later
 * License URI: http://www.gnu.org/licenses/gpl-2.0.txt
 */

add_action('init', function () {
    wp_enqueue_script(
        'gmat-custom-quiz',
        plugin_dir_url(__FILE__) . 'gmat-custom-quiz.js',
        array('jquery'),
        '1.0',
        true
    );
});
